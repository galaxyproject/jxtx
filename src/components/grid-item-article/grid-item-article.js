/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid item article component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-item-article.module.css";

function GridItemArticle(props) {
  const { children } = props;

  return <div className={compStyles.grid__item}>{children}</div>;
}

export default GridItemArticle;
