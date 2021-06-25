/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article content component.
 */

// Core dependencies
import React from "react";

// App dependencies
import ArticleBlockquote from "../article-typography/article-blockquote";
import ArticleFigcaption from "../article-typography/article-figcaption";
import ArticleH1 from "../article-typography/article-h1";
import ArticleLink from "../article-typography/article-link";
import Mdx from "../mdx/mdx";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";

// Template variables
const typography = {
    a: ArticleLink,
    blockquote: ArticleBlockquote,
    figcaption: ArticleFigcaption,
    h1: ArticleH1,
}

function ArticleContent(props) {

    const {content, frontmatter} = props,
        {fullWidth} = frontmatter || {};

    return (
        fullWidth ?
            <Mdx content={content} frontmatter={frontmatter}/> :
            <Section type={SectionType.ARTICLE}>
                <Mdx content={content} frontmatter={frontmatter} typography={typography}/>
            </Section>
    )
}

export default ArticleContent;
