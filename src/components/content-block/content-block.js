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

    const {blockScale, blockTheme, children} = props;
    const classBlockScale = ContentBlockClassname[blockScale];
    const classBlockTheme = ContentBlockClassname[blockTheme];
    const classNamesBlock = classNames(compStyles.content__block, compStyles[classBlockScale], compStyles[classBlockTheme]);

    return (
        <div className={classNamesBlock}>{children}</div>
    )
}

export default ContentBlock;
