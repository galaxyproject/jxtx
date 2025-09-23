/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardees gallery page.
 */

// Core dependencies
import { graphql } from "gatsby";
import React from "react";

// App dependencies
import Layout from "../components/layout/layout";
import Section from "../components/section/section";
import ArticleH1 from "../components/article-typographies/article-h1";
import AwardeeGallery from "../components/awardee-gallery/awardee-gallery";

export default function AwardeesPage({ data }) {
  const { site, allMdx, awardeeContent } = data;
  const { title, description } = awardeeContent.frontmatter;

  // Transform awardee data for the gallery
  const awardees = allMdx.edges
    .filter(({ node }) => {
      const slug = node.fields.slug;
      const hasAwardeeFields =
        node.frontmatter.name && node.frontmatter.institution;
      return (
        slug &&
        slug.startsWith("/awardees/") &&
        slug !== "/awardees-content/" &&
        hasAwardeeFields
      );
    })
    .map(({ node }) => ({
      name: node.frontmatter.name,
      institution: node.frontmatter.institution,
      photo: node.frontmatter.photo,
      conference: node.frontmatter.conference,
      year: node.frontmatter.year,
      program: node.frontmatter.program,
      slug: node.fields.slug,
    }))
    .sort((a, b) => {
      // Sort by year (newest first), then by name
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return a.name.localeCompare(b.name);
    });

  const frontmatter = {
    title,
    description,
    image: awardeeContent.frontmatter.image,
  };

  return (
    <Layout frontmatter={frontmatter} headerMinor>
      <Section>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}
        >
          <ArticleH1>JXTX Foundation Awardees</ArticleH1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.5",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            Meet the talented researchers who have received JXTX Foundation
            scholarships to attend conferences in computational biology and data
            science. These awardees represent the next generation of
            computational biologists and data scientists, making significant
            contributions to their fields while carrying forward Professor James
            P. Taylor's legacy of mentorship and open science.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: "1.5",
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            The JXTX Foundation provides support for students to attend
            conferences where they can present their work, form connections with
            other researchers, and advance their careers in computational
            biology and data science.
          </p>
        </div>
        <AwardeeGallery awardees={awardees} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    awardeeContent: mdx(fields: { slug: { eq: "/awardees-content/" } }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            resize {
              src
            }
          }
        }
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            institution
            photo {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            conference
            year
            program
          }
        }
      }
    }
  }
`;
