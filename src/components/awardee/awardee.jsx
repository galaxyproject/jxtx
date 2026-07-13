/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./awardee.module.css";

function Awardee(props) {
  const { children } = props;

  return <div className={compStyles.awardee}>{children}</div>;
}

export default Awardee;
