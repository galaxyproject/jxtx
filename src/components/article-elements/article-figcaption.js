/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article figcaption component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./article-figcaption.module.css";

function ArticleFigcaption(props) {

    const {children} = props;

    return (
        <figcaption className={compStyles.article__figcaption}>
            {children}
        </figcaption>
    )
}

export default ArticleFigcaption;
