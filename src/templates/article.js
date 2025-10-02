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

export default function Article({ data, children }) {
  const post = data.mdx,
    { fields, frontmatter } = post || {},
    { slug } = fields;

  // Create props object for MDX scope
  const props = {
    images: frontmatter?.images || [],
    links: frontmatter?.links || [],
    frontmatter: frontmatter || {},
  };

  // Clone children with props injected
  const childrenWithProps = React.isValidElement(children)
    ? React.cloneElement(children, props)
    : children;

  return (
    <Layout frontmatter={frontmatter} headerMinor slug={slug}>
      <ArticleMain>
        <ArticleContent frontmatter={frontmatter}>
          {childrenWithProps}
        </ArticleContent>
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
