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

    const {blockPosition, blockScale, blockTheme, blockType, children} = props;
    const classBlockPosition = ContentBlockClassname[blockPosition];
    const classBlockScale = ContentBlockClassname[blockScale];
    const classBlockTheme = ContentBlockClassname[blockTheme];
    const classBlockType = ContentBlockClassname[blockType];
    const classNamesBlock = classNames(
        compStyles.content__block,
        compStyles[classBlockPosition],
        compStyles[classBlockScale],
        compStyles[classBlockTheme],
        compStyles[classBlockType]
    );

    return (
        <div className={classNamesBlock}>{children}</div>
    )
}

export default ContentBlock;
