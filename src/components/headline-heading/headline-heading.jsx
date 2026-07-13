/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX headline heading component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./headline-heading.module.css";

function HeadlineHeading(props) {
  const { children } = props;

  return <h1 className={compStyles.headline__heading}>{children}</h1>;
}

export default HeadlineHeading;
