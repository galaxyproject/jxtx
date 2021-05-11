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
import React from "react";

export default function Article({data}) {

    const post = data.mdx,
        {body: content} = post;

    return (
        <MDXRenderer>{content}</MDXRenderer>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      slug
    }
  }
`;
