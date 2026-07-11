// A second MDX v1-vs-v3 semantic gap, alongside the one rehype-explicit-overrides.mjs fixes.
//
// Gatsby's MDX v1 pipeline unwrapped a JSX element's content when that content collapsed to
// exactly one paragraph: `<TileHeading>\nSome text\n</TileHeading>` rendered as
// `<h3>Some text</h3>` -- the paragraph mdast/hast node was never emitted as a literal `<p>`.
// MDX v3 (`@mdx-js/mdx`) dropped that unwrapping: the same source now renders
// `<h3><p>Some text</p></h3>`. This is easy to miss because it only shows up when a
// component's entire content is a single paragraph; components with several children (e.g. an
// `<h3>` followed by a bio paragraph inside `AwardeeContent`) already rendered a real `<p>` in
// both pipelines and are unaffected.
//
// This regressed pixel parity everywhere a component's content is single-paragraph text typed
// on its own line(s) inside the tags -- most visibly the `Tile`/`TileHeading`/`TileBody` family
// used by the news/scholarships/events listing pages (~22-24 tiles per page, each gaining an
// extra `<p>` in the heading AND the body, each picking up typography.css's global
// `p { margin-bottom: 1.5rem }`), and `ButtonCta` (`<ButtonCta>\nApply Now\n</ButtonCta>`).
//
// Confirmed empirically against parity/gatsby-build: every "sole child is a lone paragraph"
// case inside a literal JSX/component invocation renders bare in Gatsby's actual build; cases
// with multiple children (headings + body text, multi-paragraph blockquotes) render `<p>` in
// both and are left alone by this plugin.
//
// Like rehype-explicit-overrides.mjs, this runs on the hast tree before MDX's recma phase, where
// literal JSX/component invocations are still `mdxJsxFlowElement`/`mdxJsxTextElement` nodes (tag
// name on `.name`) rather than plain hast `element` nodes -- so this intentionally does NOT
// touch real Markdown constructs (e.g. a `> quoted` blockquote), only JSX/component children.

function isWhitespaceText(node) {
  return node.type === "text" && /^\s*$/.test(node.value ?? "");
}

function unwrapSoleParagraph(node) {
  if (
    node &&
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    Array.isArray(node.children)
  ) {
    const significant = node.children.filter(
      (child) => !isWhitespaceText(child)
    );
    if (
      significant.length === 1 &&
      significant[0].type === "element" &&
      significant[0].tagName === "p"
    ) {
      node.children = significant[0].children;
    }
  }
  if (node && Array.isArray(node.children)) {
    for (const child of node.children) unwrapSoleParagraph(child);
  }
}

export default function rehypeUnwrapSoleParagraph() {
  return (tree) => {
    unwrapSoleParagraph(tree);
  };
}
