// Screenshot every route at four widths.
// Usage: node parity/capture.mjs --out parity/baseline [--url http://localhost:5598] [--routes parity/routes.json]
import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(name);
  return i === -1 ? dflt : args[i + 1];
};
const baseURL = opt("--url", "http://localhost:5598");
const outDir = opt("--out", "parity/candidate");
const routes = JSON.parse(readFileSync(opt("--routes", "parity/routes.json"), "utf8"));
const WIDTHS = [375, 768, 1240, 1800];

const slugName = (route) =>
  route === "/" ? "index" : route.replace(/^\/|\/$/g, "").replace(/\//g, "__");

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const route of routes) {
    await page.goto(baseURL + route, { waitUntil: "networkidle", timeout: 60000 });
    await page.addStyleTag({
      content: "*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }",
    });
    await page.evaluate(async () => {
      await document.fonts.ready;
      // force lazy images to load -- decode() hangs forever on images whose load never starts
      for (const img of document.images) if (img.loading === "lazy") img.loading = "eager";
      // walk the page to trigger lazy loading, then return to top
      for (let y = 0; y < document.body.scrollHeight; y += 800) window.scrollTo(0, y);
      window.scrollTo(0, 0);
      await Promise.race([
        Promise.all([...document.images].map((img) => img.decode().catch(() => {}))),
        new Promise((r) => setTimeout(r, 10000)),
      ]);
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(outDir, `${slugName(route)}--${width}.png`), fullPage: true });
    console.log(`${route} @ ${width}`);
  }
  await context.close();
}
await browser.close();
console.log(`captured ${routes.length * WIDTHS.length} screenshots to ${outDir}`);
