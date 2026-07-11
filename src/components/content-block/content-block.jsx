/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block component.
 */

// Core dependencies
import React from "react";

// App dependencies
import { ContentBlockClassname } from "./content-block-classname.model";

// Styles
import * as compStyles from "./content-block.module.css";
const classNames = require("classnames");

function ContentBlock(props) {
  const { children, scale, theme } = props;
  const classScale = ContentBlockClassname[scale];
  const classTheme = ContentBlockClassname[theme];
  const classNamesContentBlock = classNames(
    compStyles.content__block,
    compStyles[classScale],
    compStyles[classTheme]
  );

  return <div className={classNamesContentBlock}>{children}</div>;
}

export default ContentBlock;
