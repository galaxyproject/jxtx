// Gatsby's MDX v1 pipeline (`gatsby-plugin-mdx`) let the `components` prop passed to
// the compiled MDX function override ANY element with a matching tag name, whether it
// came from Markdown syntax (`# heading`) or from literal JSX typed directly in the
// source (`<figcaption>...</figcaption>`). This site's content relies on that: several
// articles hand-type `<figcaption>`, `<a href>`, `<blockquote>`, and `<h1>` tags (see
// `articleShortcodes` in src/lib/shortcodes.js) expecting them to render through the
// article-styled React components instead of as bare HTML elements.
//
// MDX v3 (`@mdx-js/mdx`, used by `@astrojs/mdx`) intentionally changed this behavior.
// Its `recma-jsx-rewrite` plugin marks literal JSX elements with `data._mdxExplicitJsx`
// during parsing and explicitly skips rewriting those to `_components.*` lookups (see
// node_modules/@mdx-js/mdx/lib/plugin/recma-jsx-rewrite.js ~line 177) -- the rationale
// being that `<h1>` typed literally shouldn't necessarily mean the same thing as `# `.
// For this codebase that's a regression, not a feature: it silently drops the
// `article__figcaption`/`article__link`/etc. classes for every hand-typed tag.
//
// This rehype plugin runs on the hast tree before MDX's recma phase, so it strips the
// explicit-JSX marker from exactly the four tag names we override (`articleShortcodes`),
// restoring the old Gatsby v1 "components prop wins regardless of source syntax" behavior
// for just those tags. Pages that don't supply an override for a tag (e.g. fullWidth pages,
// which only spread `shortcodes`) are unaffected -- there's simply no `_components.a` etc.
// to fall back to, so the plain HTML element renders exactly as it did before.
//
// Note: literal JSX tags don't become plain hast `element` nodes -- remark-rehype passes
// them through untouched as `mdxJsxFlowElement`/`mdxJsxTextElement` (tag name on `.name`,
// not `.tagName`), which is where `_mdxExplicitJsx` actually lives at this point in the
// pipeline.
const OVERRIDDEN_TAGS = new Set(["a", "blockquote", "figcaption", "h1"]);

function stripExplicitJsxFlag(node) {
  if (
    node &&
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    OVERRIDDEN_TAGS.has(node.name) &&
    node.data
  ) {
    delete node.data._mdxExplicitJsx;
    if (Object.keys(node.data).length === 0) delete node.data;
  }
  if (node && Array.isArray(node.children)) {
    for (const child of node.children) stripExplicitJsxFlag(child);
  }
}

export default function rehypeExplicitOverrides() {
  return (tree) => {
    stripExplicitJsxFlag(tree);
  };
}
