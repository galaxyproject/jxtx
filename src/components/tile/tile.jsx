/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile component.
 */

// Core dependencies
import React from "react";

// App dependencies
import { TileClassname } from "./tile-classname.model";
import TileLink from "../tile-link/tile-link";
import { TileOrientation } from "./tile-orientation.model";

// Styles
import * as compStyles from "./tile.module.css";

function Tile(props) {
  const { children, orientation, tileLink } = props;
  const classOrientation =
    TileClassname[orientation] || TileClassname[TileOrientation.VERTICAL];

  return (
    <div className={compStyles[classOrientation]}>
      {tileLink ? <TileLink to={tileLink} /> : null}
      {children}
    </div>
  );
}

export default Tile;
