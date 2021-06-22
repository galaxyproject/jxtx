/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX template component.
 * Renders markdown content.
 */

// Core dependencies
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import React from "react";

// App dependencies
import ArticleMain from "../components/article-main/article-main";
import Headline from "../components/headline/headline";
import HeadlineHeading from "../components/headline-heading/headline-heading";
import Layout from "../components/layout/layout";

// Template variables
const shortcodes = {
    Headline,
    HeadlineHeading
};

export default function Article({data}) {

    const post = data.mdx,
        {body: content} = post;

    return (
        <Layout headerMinor>
            <ArticleMain>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {content}
                    </MDXRenderer>
                </MDXProvider>
            </ArticleMain>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      slug
    }
  }
`;
