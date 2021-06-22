/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article main component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./article-main.module.css";

function ArticleMain(props) {

    const {children} = props;

    return (
        <main className={compStyles.main}>{children}</main>
    )
}

export default ArticleMain;
