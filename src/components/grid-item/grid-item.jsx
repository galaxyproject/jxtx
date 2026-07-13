/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid item component.
 */

// Core dependencies
import React from "react";

// App dependencies
import { GridArea } from "../ui/grid-area/grid-area.model";
import { GridAreaClassname } from "../ui/grid-area/grid-area-classname.model";

// Styles
import * as compStyles from "./grid-item.module.css";

function GridItem(props) {
  const { children, gridArea } = props;
  const classGridArea = GridAreaClassname[GridArea[gridArea]];

  return <div className={compStyles[classGridArea]}>{children}</div>;
}

export default GridItem;
