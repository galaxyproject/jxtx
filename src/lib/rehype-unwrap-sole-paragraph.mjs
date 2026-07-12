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

// A hast <p> whose entire content is whitespace -- `\s` matches `&nbsp;`/` ` too. In this
// content that's a standalone `&nbsp;` line typed between two JSX siblings (the ButtonSocial
// separators on news/2021-08-jxtx-awardees). Gatsby's MDX v1 rendered such a line as bare text
// (`</a>&nbsp;<a>`); MDX v3 wraps it in `<p>&nbsp;</p>`, which then picks up typography.css's
// global `p { margin-bottom: 1.5rem }` and inflates the awardee card. This is the same v1-vs-v3
// unwrapping gap as the sole-paragraph case below, just for a whitespace paragraph that sits
// among other siblings rather than being the element's only child.
function isWhitespaceOnlyParagraph(node) {
  return (
    node &&
    node.type === "element" &&
    node.tagName === "p" &&
    Array.isArray(node.children) &&
    node.children.length > 0 &&
    node.children.every(isWhitespaceText)
  );
}

function isElement(node, tagName) {
  return node && node.type === "element" && node.tagName === tagName;
}

// A `<br/>` typed literally in MDX is a JSX node (tag name on `.name`), not a plain hast element
// (`.tagName`) -- same distinction rehype-explicit-overrides.mjs relies on -- so match both forms.
function isBr(node) {
  return (
    node &&
    ((node.type === "element" && node.tagName === "br") ||
      ((node.type === "mdxJsxFlowElement" ||
        node.type === "mdxJsxTextElement") &&
        node.name === "br"))
  );
}

// Gatsby's MDX v1 left a text "paragraph" unwrapped when a literal `<br/>` line immediately
// followed it inside a JSX element -- the run of text + `<br/>` + trailing JSX stayed one loose
// inline flow rather than a wrapped `<p>` plus a stray `<br/>`. MDX v3 wraps the text in `<p>`,
// which then contributes a paragraph margin the original never had. The site's sole occurrence is
// the Vitoria card on news/2021-08-jxtx-awardees, where `<br /><br />` sits between the bio line
// and the social button. Unwrapping the `<p>` reproduces Gatsby's exact `...neurons<br/><br/><a>`.
function nextSignificant(children, index) {
  let j = index + 1;
  while (j < children.length && isWhitespaceText(children[j])) j++;
  return children[j];
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
    } else {
      // Unwrap two more JSX-scoped paragraph cases that Gatsby left bare (real Markdown
      // paragraphs are never reached, matching the rest of this plugin family):
      //   1. whitespace-only <p> (the three `&nbsp;` button separators) -> bare text.
      //   2. a text <p> immediately followed by a `<br/>` sibling (the Vitoria bio) -> unwrapped.
      const kids = node.children;
      const out = [];
      for (let i = 0; i < kids.length; i++) {
        const child = kids[i];
        if (isWhitespaceOnlyParagraph(child)) {
          out.push(...child.children);
        } else if (isElement(child, "p") && isBr(nextSignificant(kids, i))) {
          out.push(...child.children);
        } else {
          out.push(child);
        }
      }
      node.children = out;
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
