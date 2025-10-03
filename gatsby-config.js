/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX configuration file.
 */

// Core dependencies
const remarkGfm = require('remark-gfm');

// Template variables
const contentPath = "./content";

/**
 * Module exports.
 *
 * @type {{siteMetadata: {title: string}, plugins: [string,string,null,string,string,null,null,null]}}
 */
module.exports = {
  siteMetadata: {
    author: "JXTX",
    description: "James P. Taylor Foundation for Open Science.",
    image: "/images/hero.png",
    title: "JXTX Foundation",
    titleTemplate: "%s · James P. Taylor Foundation for Open Science.",
    url: "https://jxtxfoundation.org",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-remark-images",
    "gatsby-remark-external-links",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-FJCM7HH4RT" // Google Analytics / GA
        ]
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        // Add remarkPlugins at top level for gatsby-plugin-mdx v5
        remarkPlugins: [remarkGfm],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: "gatsby-remark-external-links",
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#F8F8F8",
        display: "standalone",
        icon: "./images/favicon/favicon.png",
        name: "JXTX Foundation",
        short_name: "JXTX",
        start_url: "/",
        theme_color: "#2077B3",
      },
    },
  ],
};
