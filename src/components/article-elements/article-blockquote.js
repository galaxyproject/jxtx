/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article blockquote component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./article-blockquote.module.css";

function ArticleBlockquote(props) {

    const {children} = props;

    return (
        <blockquote className={compStyles.article__blockquote} {...props}>
            {children}
        </blockquote>
    )
}

export default ArticleBlockquote;
