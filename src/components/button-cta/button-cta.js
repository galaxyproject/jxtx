/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX a button component.
 * Anchor tag styled like a button.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ButtonClassname} from "../button/button-classname.model";

// Styles
import * as buttonStyles from "../button/button.module.css";
const classNames = require("classnames");

function ButtonCta(props) {

    const {attributeHREF, attributeRel, attributeTarget, buttonTheme, buttonType, children} = props;
    const classButtonTheme = ButtonClassname[buttonTheme];
    const classButtonType = ButtonClassname[buttonType];
    const classNamesButton = classNames(buttonStyles.button, buttonStyles[classButtonTheme], buttonStyles[classButtonType]);

    return (
        <a className={classNamesButton}
           href={attributeHREF}
           rel={attributeRel}
           target={attributeTarget}>{children}</a>
    )
}

export default ButtonCta;
