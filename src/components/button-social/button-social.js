/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX button social component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ButtonClassname} from "../button/button-classname.model";
import {ButtonSize} from "../button/button-size.model";
import {ButtonType} from "../button/button-type.model";
import {Target} from "../../utils/anchor/target.model";

// Styles
import * as buttonStyles from "../button/button.module.css";
const classNames = require("classnames");

function ButtonSocial(props) {

    const {attributeHREF, children, iconSize} = props;
    const classButtonSize = ButtonClassname[`${ButtonType.SOCIAL}_${ButtonSize[iconSize]}`];
    const classButtonType = ButtonClassname[ButtonType.SOCIAL];
    const classNamesButton = classNames(buttonStyles[classButtonType], buttonStyles[classButtonSize]);

    return (
        <a className={classNamesButton}
           href={attributeHREF}
           target={Target.BLANK}>{children}
        </a>
    )
}

export default ButtonSocial;
