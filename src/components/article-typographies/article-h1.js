/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article h1 component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./article-h1.module.css";

function ArticleH1(props) {
  const { children } = props;

  return <h1 className={compStyles.article__h1}>{children}</h1>;
}

export default ArticleH1;
