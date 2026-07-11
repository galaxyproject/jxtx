import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import rehypeExplicitOverrides from "./src/lib/rehype-explicit-overrides.mjs";

export default defineConfig({
  site: "https://jxtxfoundation.org",
  trailingSlash: "ignore",
  server: { port: 5598 },
  devToolbar: { enabled: false },
  integrations: [react(), mdx()],
  markdown: {
    // matches gatsby-remark-external-links defaults (target/rel on external links)
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
      rehypeExplicitOverrides,
    ],
  },
});
