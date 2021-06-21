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

function ContentBlockHeading(props) {

    const {children, theme} = props;
    const classTheme = HeadingClassname[theme];

    return (
        <h3 className={headingStyles[classTheme]}>{children}</h3>
    )
}

export default ContentBlockHeading;
