/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX configuration file.
 */

// Template variables
const contentPath = "./content";

/**
 * Module exports.
 *
 * @type {{siteMetadata: {title: string}, plugins: [string,string,null,string,string,null,null,null]}}
 */
module.exports = {
    siteMetadata: {
        title: "jxtx",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".md", ".mdx"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown-pages",
                path: contentPath,
            },
        }
    ],
};
