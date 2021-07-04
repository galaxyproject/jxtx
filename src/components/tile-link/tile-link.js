/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile link component.
 */

// Core dependencies
import { Link } from "gatsby";
import React from "react";

// Styles
import * as compStyles from "./tile-link.module.css";

function TileLink(props) {
  const { to } = props;

  return <Link className={compStyles.tile__link} to={to} />;
}

export default TileLink;
