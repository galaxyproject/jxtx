import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import rehypeExplicitOverrides from "./src/lib/rehype-explicit-overrides.mjs";
import rehypeUnwrapSoleParagraph from "./src/lib/rehype-unwrap-sole-paragraph.mjs";

export default defineConfig({
  site: "https://jxtxfoundation.org",
  trailingSlash: "ignore",
  server: { port: 5598 },
  devToolbar: { enabled: false },
  integrations: [react(), mdx()],
  markdown: {
    // Gatsby's MDX pipeline never ran SmartyPants, so its HTML keeps ASCII punctuation verbatim
    // (`--`, straight quotes, `...`); content that wanted em-dashes/curly quotes typed the Unicode
    // directly. Astro enables SmartyPants by default, which rewrote `--` -> em-dash etc. and, on
    // news/2026-5-11-gcc-awardees, widened a line enough to wrap and add ~30px of height at 1240px.
    // Disabling it restores byte-for-byte punctuation parity with the baseline across the site.
    smartypants: false,
    // matches gatsby-remark-external-links defaults (target/rel on external links)
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] },
      ],
      rehypeExplicitOverrides,
      rehypeUnwrapSoleParagraph,
    ],
  },
});
