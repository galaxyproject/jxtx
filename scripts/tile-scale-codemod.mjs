// One-shot: make the scale that Tile/TileContent used to inject via cloneElement explicit in
// content. A Tile with scale={"MEDIUM"} propagated MEDIUM to its children; any other Tile
// propagated SMALL. Tile children are always on their own lines in these files.
import { readFileSync, writeFileSync } from "node:fs";

const files = [
  "content/news/news.mdx",
  "content/scholarships/scholarships.mdx",
  "content/events/events.mdx",
];
const CHILD_TAGS = ["TileThumbnail", "TileContent", "TileHeading", "TileBody", "TileDate"];

for (const file of files) {
  let scale = null;
  let edits = 0;
  const out = readFileSync(file, "utf8").split("\n").map((line) => {
    if (/<Tile[\s>]/.test(line)) scale = /scale=\{"MEDIUM"\}/.test(line) ? "MEDIUM" : "SMALL";
    if (/<\/Tile>/.test(line)) { const l = line; scale = null; return l; }
    if (scale) {
      for (const tag of CHILD_TAGS) {
        const re = new RegExp(`<${tag}(?![A-Za-z])`);
        if (re.test(line) && !line.includes("scale=")) {
          edits += 1;
          return line.replace(re, `<${tag} scale={"${scale}"}`);
        }
      }
    }
    return line;
  });
  writeFileSync(file, out.join("\n"));
  console.log(`${file}: ${edits} scale attributes added`);
}
