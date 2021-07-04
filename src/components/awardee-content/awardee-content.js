/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee content component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./awardee-content.module.css";

function AwardeeContent(props) {
  const { children } = props;

  return <div className={compStyles.awardee__content}>{children}</div>;
}

export default AwardeeContent;
