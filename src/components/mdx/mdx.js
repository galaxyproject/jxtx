/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX mdx component.
 */

// Core dependencies
import React from "react";

function Mdx(props) {
  const { children } = props;

  // In Gatsby 5 + MDX v2, components are provided via gatsby-browser.js/gatsby-ssr.js
  // Just render children directly
  return <>{children}</>;
}

export default Mdx;
