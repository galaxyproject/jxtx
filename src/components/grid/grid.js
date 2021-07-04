/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid.module.css";
const classNames = require("classnames");

function Grid(props) {
  const { children, columns, grid } = props;
  const x = columns ? columns : 1;
  const classByX = grid ? null : `grid___x${x}`;

  return (
    <div
      className={classNames(compStyles[classByX], {
        [compStyles.grid__container]: grid,
      })}
    >
      {children}
    </div>
  );
}

export default Grid;
