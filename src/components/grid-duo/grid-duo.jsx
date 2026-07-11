/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid duo component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-duo.module.css";

function GridDuo(props) {
  const { children } = props;

  return <div className={compStyles.grid___duo}>{children}</div>;
}

export default GridDuo;
