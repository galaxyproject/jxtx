/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX gatsby node file.
 */

// Core dependencies
const path = require("path");

// App dependencies
const { createFilePath } = require("gatsby-source-filesystem");

// Template variables
const templateComponent = "./src/templates/article.js";
const awardeeTemplateComponent = "./src/templates/awardee.js";

/**
 * Create nodes.
 * Places nodes under the "fields" keys on the extended node object.
 *
 * @param actions
 * @param getNode
 * @param node
 */
exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  const { internal } = node,
    { type } = internal || {};
  const nodeType = type.toUpperCase();

  if (nodeType === "MDX") {
    /* Grab the slug from frontmatter, if it is specified. */
    const { frontmatter } = node;
    let slug = frontmatter?.slug;

    /* Create the slug from the file path. */
    if (!slug) {
      slug = createFilePath({ node, getNode, basePath: "pages" });
    }

    /* Slug. */
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });

    /* Check if this is an awardee and create appropriate fields */
    const filePath = createFilePath({ node, getNode, basePath: "content" });
    const isAwardee = filePath.startsWith("/awardees/");

    createNodeField({
      node,
      name: "isAwardee",
      value: isAwardee,
    });
  }
};

/**
 * Create pages.
 *
 * @param actions
 * @param graphql
 * @returns {Promise.<void>}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  /* Query the graphql. */
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              isAwardee
            }
          }
        }
      }
    }
  `);

  /* For each MDX node type, create a page. */
  result.data.allMdx.edges.forEach(({ node }) => {
    const { fields } = node,
      { slug, isAwardee } = fields;

    const template = isAwardee ? awardeeTemplateComponent : templateComponent;

    createPage({
      path: slug,
      component: path.resolve(template),
      context: {
        slug: slug,
      },
    });
  });
};

/**
 * Schema customization.
 *
 * @param actions
 * @returns {*}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
        frontmatter: Frontmatter
    }
    type Frontmatter {
        description: String
        fullWidth: Boolean
        image: File @fileByRelativePath
        images: [File] @fileByRelativePath
        links: [String]
        slug: String
        title: String
        name: String
        institution: String
        photo: File @fileByRelativePath
        conference: String
        year: Int
        program: String
    }
  `);
};
