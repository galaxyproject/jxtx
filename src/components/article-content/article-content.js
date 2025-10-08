/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article content component.
 */

// Core dependencies
import React from "react";

// App dependencies
import ArticleA from "../article-elements/article-a";
import ArticleBlockquote from "../article-elements/article-blockquote";
import ArticleFigcaption from "../article-elements/article-figcaption";
import ArticleH1 from "../article-typographies/article-h1";
import Mdx from "../mdx/mdx";
import Section from "../section/section";
import { SectionType } from "../section/section-type.model";

// Template variables
const shortcodeElements = {
  a: ArticleA,
  blockquote: ArticleBlockquote,
  figcaption: ArticleFigcaption,
};
const shortcodeTypographies = {
  h1: ArticleH1,
};

function ArticleContent(props) {
  const { children, frontmatter } = props,
    { fullWidth } = frontmatter || {};
  const articleShortcodes = { ...shortcodeElements, ...shortcodeTypographies };

  return fullWidth ? (
    <Mdx frontmatter={frontmatter}>
      {children}
    </Mdx>
  ) : (
    <Section type={SectionType.ARTICLE}>
      <Mdx
        articleShortcodes={articleShortcodes}
        frontmatter={frontmatter}
      >
        {children}
      </Mdx>
    </Section>
  );
}

export default ArticleContent;
