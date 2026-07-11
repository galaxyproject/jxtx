/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid tres component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-tres.module.css";

function GridTres(props) {
  const { children } = props;

  return <div className={compStyles.grid___tres}>{children}</div>;
}

export default GridTres;
