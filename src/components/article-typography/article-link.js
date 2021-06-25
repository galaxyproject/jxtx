/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article link component.
 */

// Core dependencies
import Link from "gatsby-link";
import React from "react";

// Styles
import * as compStyles from "./article-link.module.css";

function ArticleLink(props) {

    const {children, href} = props;
    const internal = /^\/(?!\/)/.test(href); /* See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links. */

    return (
        children ?
            internal ?
                <Link className={compStyles.article__link} to={href}>{children}</Link> :
                <a className={compStyles.article__link} {...props}>{children}</a> :
            null
    )
}

export default ArticleLink;
