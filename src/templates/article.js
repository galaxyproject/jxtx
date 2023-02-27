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
import Layout from "../components/layout/layout";
import ArticleContent from "../components/article-content/article-content";
import ArticleMain from "../components/article-main/article-main";

export default function Article(props) {
  const children = props.children;
  const mdx = props.data.mdx;
  const frontmatter = mdx.frontmatter;
  const { slug } = mdx.fields;
  
  return (
    <Layout frontmatter={frontmatter} headerMinor slug={slug}>
      <ArticleMain>
        <ArticleContent children={children} frontmatter={frontmatter} />
      </ArticleMain>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
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
    }
  }
`;
