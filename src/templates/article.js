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
import Grid from "../components/grid/grid";
import Headline from "../components/headline/headline";
import HeadlineHeading from "../components/headline-heading/headline-heading";
import Layout from "../components/layout/layout";
import Newsroom from "../components/newsroom/newsroom";
import Tile from "../components/tile/tile";
import TileBody from "../components/tile-body/tile-body";
import TileContent from "../components/tile-content/tile-content";
import TileDate from "../components/tile-date/tile-date";
import TileHeading from "../components/tile-heading/tile-heading";
import TileThumbnail from "../components/tile-tumbnail/tile-thumbnail";

// Template variables
const shortcodes = {
    Grid,
    Headline,
    HeadlineHeading,
    Newsroom,
    Tile,
    TileBody,
    TileContent,
    TileDate,
    TileHeading,
    TileThumbnail,
};

export default function Article({data}) {

    const post = data.mdx,
        {body: content, frontmatter} = post || {};

    return (
        <Layout headerMinor>
            <ArticleMain>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer frontmatter={frontmatter}>
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
      frontmatter {
        description
        title
      }
      slug
    }
  }
`;
