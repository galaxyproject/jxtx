/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid article component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-article.module.css";

function GridArticle(props) {
  const { children } = props;

  return <div className={compStyles.grid}>{children}</div>;
}

export default GridArticle;
