/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX gatsby node file.
 */

// Core dependencies
const path = require("path");

// App dependencies
const {createFilePath} = require("gatsby-source-filesystem");

// Template variables
const templateComponent = "./src/templates/article.js";

/**
 * Create nodes.
 * Places nodes under the "fields" keys on the extended node object.
 *
 * @param actions
 * @param getNode
 * @param node
 */
exports.onCreateNode = ({actions, getNode, node}) => {

    const {createNodeField} = actions;

    const {internal} = node,
            {type} = internal || {};
    const nodeType = type.toUpperCase();

    if (nodeType === "MDX") {

        /* Grab the slug from frontmatter, if it is specified. */
        const {frontmatter} = node;
        let slug = frontmatter?.slug;

        /* Create the slug from the file path. */
        if ( !slug ) {

            slug = createFilePath({node, getNode, basePath: "pages"});
        }

        /* Slug. */
        createNodeField({
            node,
            name: "slug",
            value: slug,
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
exports.createPages = async ({actions, graphql}) => {

    const {createPage} = actions;

    /* Query the qraphql. */
    const result = await graphql(`
        query {
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
    `);

    /* For each MDX node type, create a page. */
    result.data.allMdx.edges.forEach(({node}) => {

        const {fields} = node,
                {slug} = fields;

        createPage({
            path: slug,
            component: path.resolve(templateComponent),
            context: {
                slug: slug,
            },
        })
    })
};

/**
 * Schema customization.
 *
 * @param actions
 * @returns {*}
 */
exports.createSchemaCustomization = ({actions}) => {

    const {createTypes} = actions;

    createTypes(`
    type Mdx implements Node {
        frontmatter: Frontmatter
    }
    type Frontmatter {
        description: String
        title: String
    }
  `)
}
