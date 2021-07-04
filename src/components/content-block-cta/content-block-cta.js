/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block cta component.
 * Provides a wrapper for call to actions.
 */

// Core dependencies
import React from "react";

// App dependencies
import { ScaleClassname } from "../ui/scale/scale-classname.model";

// Styles
import * as compStyles from "./content-block-cta.module.css";
const classNames = require("classnames");

function ContentBlockCta(props) {
  const { children, scale } = props;
  const classScale = ScaleClassname[scale];
  const classNamesCTA = classNames(compStyles[classScale]);

  return <div className={classNamesCTA}>{children}</div>;
}

export default ContentBlockCta;
