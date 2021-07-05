/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX template component.
 * Renders markdown content.
 */

// Core dependencies
import { graphql } from "gatsby";
import React from "react";

// App dependencies
import ArticleContent from "../components/article-content/article-content";
import ArticleMain from "../components/article-main/article-main";
import Layout from "../components/layout/layout";

export default function Article({ data }) {
  const post = data.mdx,
    { body: content, frontmatter } = post || {};

  return (
    <Layout frontmatter={frontmatter} headerMinor>
      <ArticleMain>
        <ArticleContent content={content} frontmatter={frontmatter} />
      </ArticleMain>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        description
        fullWidth
        image {
          childImageSharp {
            resize {
              src
            }
          }
        }
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
        links
        title
      }
      slug
    }
  }
`;
