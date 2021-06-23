/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile heading component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {HeadingClassname} from "../heading/heading-classname.model";
import {TileContentScale} from "../tile-content/tile-content-scale.model";

// Styles
import * as headingStyles from "../heading/heading.module.css";
const classNames = require("classnames");

function TileHeading(props) {

    const {children, scale} = props;
    const classScale = HeadingClassname[scale];
    const classTheme = scale === TileContentScale.MEDIUM ? HeadingClassname.ORANGE : null;
    const classNamesHeading = classNames(headingStyles[classScale], headingStyles[classTheme]);

    return (
        <h3 className={classNamesHeading}>{children}</h3>
    )
}

export default TileHeading;
