// Diff baseline vs candidate screenshots with pixelmatch.
// Usage: node parity/compare.mjs [--max-ratio 0.005]
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const args = process.argv.slice(2);
const i = args.indexOf("--max-ratio");
const MAX_RATIO = i === -1 ? 0.005 : parseFloat(args[i + 1]);
const baseDir = "parity/baseline";
const candDir = "parity/candidate";
const diffDir = "parity/diff";
mkdirSync(diffDir, { recursive: true });

const pad = (png, width, height) => {
  if (png.width === width && png.height === height) return png;
  const out = new PNG({ width, height, fill: true });
  PNG.bitblt(png, out, 0, 0, png.width, png.height, 0, 0);
  return out;
};

const results = [];
for (const name of readdirSync(baseDir).filter((f) => f.endsWith(".png")).sort()) {
  let cand;
  try {
    cand = PNG.sync.read(readFileSync(join(candDir, name)));
  } catch {
    results.push({ name, error: "missing in candidate" });
    continue;
  }
  const base = PNG.sync.read(readFileSync(join(baseDir, name)));
  const width = Math.max(base.width, cand.width);
  const height = Math.max(base.height, cand.height);
  const a = pad(base, width, height);
  const b = pad(cand, width, height);
  const diff = new PNG({ width, height });
  const differing = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.1 });
  const ratio = differing / (width * height);
  const heightDelta = Math.abs(base.height - cand.height);
  if (ratio > 0 || heightDelta > 0) writeFileSync(join(diffDir, name), PNG.sync.write(diff));
  results.push({ name, differing, ratio, heightDelta });
}

results.sort((x, y) => (y.ratio ?? 1) - (x.ratio ?? 1));
writeFileSync("parity/report.json", JSON.stringify(results, null, 2));
const failures = results.filter((r) => r.error || r.ratio > MAX_RATIO || r.heightDelta > 2);
for (const r of results.slice(0, 25)) {
  console.log(
    r.error
      ? `MISSING  ${r.name}`
      : `${(r.ratio * 100).toFixed(3).padStart(7)}%  dH=${String(r.heightDelta).padStart(4)}  ${r.name}`
  );
}
console.log(`\n${results.length} compared, ${failures.length} over threshold (${MAX_RATIO * 100}% or dH>2). Report: parity/report.json`);
process.exit(failures.length ? 1 : 0);
