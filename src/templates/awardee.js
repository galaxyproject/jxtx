/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee template component.
 * Renders individual awardee pages.
 */

// Core dependencies
import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// App dependencies
import Layout from "../components/layout/layout";
import ArticleMain from "../components/article-main/article-main";
import ArticleContent from "../components/article-content/article-content";

// Styles
import * as compStyles from "./awardee.module.css";

export default function Awardee({ data, children }) {
  const awardee = data.mdx,
    { fields, frontmatter } = awardee || {},
    { slug } = fields,
    { name, institution, photo, conference, year, program } = frontmatter;

  const image = getImage(photo);

  return (
    <Layout frontmatter={frontmatter} headerMinor slug={slug}>
      <ArticleMain>
        <div className={compStyles.awardeeProfile}>
          <div className={compStyles.awardeeHeader}>
            <div className={compStyles.awardeeImageContainer}>
              {image && (
                <GatsbyImage
                  image={image}
                  alt={name}
                  className={compStyles.awardeeImage}
                />
              )}
            </div>
            <div className={compStyles.awardeeInfo}>
              <h1 className={compStyles.awardeeName}>{name}</h1>
              <p className={compStyles.awardeeInstitution}>{institution}</p>
              <div className={compStyles.awardeeMeta}>
                <span className={compStyles.awardeeConference}>
                  {conference} {year}
                </span>
                {program && (
                  <span className={compStyles.awardeeProgram}>{program}</span>
                )}
              </div>
            </div>
          </div>
          <ArticleContent frontmatter={frontmatter}>
            {children}
          </ArticleContent>
        </div>
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
        title
        name
        institution
        photo {
          childImageSharp {
            gatsbyImageData(
              width: 300
              height: 300
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
`;
