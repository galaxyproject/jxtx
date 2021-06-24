/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article link component.
 */

// Core dependencies
import Link from "gatsby-link";
import React from "react";

// App dependencies
import {Target} from "../../utils/anchor/target.model";

// Styles
import * as compStyles from "./article-link.module.css";

function ArticleLink(props) {

    const {children, href, target} = props;
    const externalLink = Target.BLANK === target;

    return (
        children ?
            externalLink ?
            <a className={compStyles.article__link} {...props}>{children}</a> :
            <Link className={compStyles.article__link} to={href}>{children}</Link> :
            null
    )
}

export default ArticleLink;
