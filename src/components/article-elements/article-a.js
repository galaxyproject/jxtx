/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article <a/> component.
 */

// Core dependencies
import { Link } from "gatsby";
import React from "react";

// App dependencies
import { Target } from "../../utils/anchor/target.model";

// Styles
import * as compStyles from "./article-a.module.css";

function ArticleA(props) {
  const { children, href } = props;
  const internal = /^\/(?!\/)/.test(
    href
  ); /* See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links. */
  const target =
    props.target ||
    Target.BLANK; /* Required for inline <a/> elements. For example a link inside a <figcaption/>. */

  return children ? (
    internal ? (
      <Link className={compStyles.article__link} to={href}>
        {children}
      </Link>
    ) : (
      <a className={compStyles.article__link} target={target} {...props}>
        {children}
      </a>
    )
  ) : null;
}

export default ArticleA;
