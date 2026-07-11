/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX button component.
 */

// Core dependencies
import React from "react";

// App dependencies
import { ButtonClassname } from "./button-classname.model";

// Styles
import * as compStyles from "./button.module.css";
const classNames = require("classnames");

function Button(props) {
  const { buttonAction, buttonScale, buttonTheme, buttonType, children } =
    props;
  const classButtonScale = ButtonClassname[buttonScale];
  const classButtonTheme = ButtonClassname[buttonTheme];
  const classButtonType = ButtonClassname[buttonType];
  const classNamesButton = classNames(
    compStyles.button,
    compStyles[classButtonScale],
    compStyles[classButtonTheme],
    compStyles[classButtonType]
  );

  const onHandleClickAction = () => {
    if (buttonAction) {
      buttonAction();
    }
  };

  return (
    <button className={classNamesButton} onClick={() => onHandleClickAction()}>
      {children}
    </button>
  );
}

export default Button;
