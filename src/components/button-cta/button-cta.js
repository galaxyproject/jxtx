/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX a button component.
 * Anchor tag styled like a button.
 */

// Core dependencies
import Link from "gatsby-link";
import React from "react";

// App dependencies
import { ButtonClassname } from "../button/button-classname.model";

// Styles
import * as buttonStyles from "../button/button.module.css";
const classNames = require("classnames");

function ButtonCta(props) {
  const {
    attributeHREF,
    attributeTarget,
    buttonScale,
    buttonTheme,
    buttonType,
    children,
  } = props;
  const internalCta = /^\/(?!\/)/.test(
    attributeTarget
  ); /* See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links. */
  const classButtonScale = ButtonClassname[buttonScale];
  const classButtonTheme = ButtonClassname[buttonTheme];
  const classButtonType = ButtonClassname[buttonType];
  const classNamesButton = classNames(
    buttonStyles[classButtonScale],
    buttonStyles[classButtonTheme],
    buttonStyles[classButtonType]
  );

  return internalCta ? (
    <Link className={classNamesButton} to={attributeHREF}>
      {children}
    </Link>
  ) : (
    <a
      className={classNamesButton}
      href={attributeHREF}
      target={attributeTarget}
    >
      {children}
    </a>
  );
}

export default ButtonCta;
