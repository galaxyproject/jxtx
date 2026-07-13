// Enumerate routes from a static build directory (every */index.html).
// Usage: node parity/gen-routes.mjs <build-dir> [--write]
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const buildDir = process.argv[2];
const write = process.argv.includes("--write");
if (!buildDir) {
  console.error("usage: node parity/gen-routes.mjs <build-dir> [--write]");
  process.exit(2);
}

function walk(dir, routes) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, routes);
    else if (name === "index.html") {
      const rel = relative(buildDir, dir).split(sep).join("/");
      routes.push(rel === "" ? "/" : `/${rel}/`);
    }
  }
}

const routes = [];
walk(buildDir, routes);
routes.sort();
if (write) {
  writeFileSync(new URL("./routes.json", import.meta.url), JSON.stringify(routes, null, 2) + "\n");
  console.log(`wrote ${routes.length} routes to parity/routes.json`);
} else {
  console.log(JSON.stringify(routes, null, 2));
}
