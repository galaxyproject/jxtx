/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX article publish date component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./publish-date.module.css";

function PublishDate(props) {
  const { children } = props;

  return <p className={compStyles.publish__date}>{children}</p>;
}

export default PublishDate;
