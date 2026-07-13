// Compare dist/ routes against the committed gatsby manifest. /404 is equivalent to 404.html.
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const expected = new Set(JSON.parse(readFileSync("parity/routes.json", "utf8")));
const actual = new Set(
  JSON.parse(execSync("node parity/gen-routes.mjs dist", { encoding: "utf8" }))
);
if (expected.has("/404/") && !actual.has("/404/") && existsSync("dist/404.html")) {
  actual.add("/404/"); // astro emits 404.html; netlify serves it for not-found -- equivalent
}
const missing = [...expected].filter((r) => !actual.has(r));
const extra = [...actual].filter((r) => !expected.has(r));
console.log(`expected ${expected.size}, actual ${actual.size}`);
if (missing.length) console.log("MISSING:", missing);
if (extra.length) console.log("EXTRA:", extra);
process.exit(missing.length || extra.length ? 1 : 0);
