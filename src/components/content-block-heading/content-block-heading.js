/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block heading component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {HeadingClassname} from "../heading/heading-classname.model";

// Styles
import * as headingStyles from "../heading/heading.module.css";
const classNames = require("classnames");

function ContentBlockHeading(props) {

    const {children, scale, theme} = props;
    const classScale = HeadingClassname[scale];
    const classTheme = HeadingClassname[theme];
    const classNamesHeading = classNames(headingStyles[classScale], headingStyles[classTheme]);

    return (
        <h3 className={classNamesHeading}>{children}</h3>
    )
}

export default ContentBlockHeading;
