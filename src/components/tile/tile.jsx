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
import { TileContentScale } from "../tile-content/tile-content-scale.model";
import TileLink from "../tile-link/tile-link";
import { TileOrientation } from "./tile-orientation.model";

// Styles
import * as compStyles from "./tile.module.css";

function Tile(props) {
  const { children, orientation, scale, tileLink } = props;
  const classOrientation =
    TileClassname[orientation] || TileClassname[TileOrientation.VERTICAL];
  const contentScale = TileContentScale[scale] || TileContentScale.SMALL;

  return (
    <div className={compStyles[classOrientation]}>
      {tileLink ? <TileLink to={tileLink} /> : null}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { scale: contentScale })
      )}
    </div>
  );
}

export default Tile;
