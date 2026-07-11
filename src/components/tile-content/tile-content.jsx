/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile content component.
 */

// Core dependencies
import React from "react";

// App dependencies
import { TileContentClassname } from "./tile-content-classname.model";
import { TileContentTheme } from "./tile-content-theme.model";

// Styles
import * as compStyles from "./tile-content.module.css";

import classNames from "classnames";

function TileContent(props) {
  const { children, scale } = props;
  const classScale = TileContentClassname[scale];
  const classTheme = TileContentClassname[TileContentTheme.OFF_WHITE];
  const classNamesTileContent = classNames(
    compStyles[classScale],
    compStyles[classTheme]
  );

  return <div className={classNamesTileContent}>{children}</div>;
}

export default TileContent;
