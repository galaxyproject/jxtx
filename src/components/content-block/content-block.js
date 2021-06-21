/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ContentBlockClassname} from "./content-block-classname.model";

// Styles
import * as compStyles from "./content-block.module.css";
const classNames = require("classnames");

function ContentBlock(props) {

    const {children, position, scale, theme, type} = props;
    const classPosition = ContentBlockClassname[position];
    const classScale = ContentBlockClassname[scale];
    const classTheme = ContentBlockClassname[theme];
    const classType = ContentBlockClassname[type];
    const classNamesContentBlock = classNames(
        compStyles.content__block,
        compStyles[classPosition],
        compStyles[classScale],
        compStyles[classTheme],
        compStyles[classType]
    );

    return (
        <div className={classNamesContentBlock}>{children}</div>
    )
}

export default ContentBlock;
