/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block position left component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./content-block-position-left.module.css";

function ContentBlockPositionLeft(props) {

    const {children} = props;

    return (
        <div className={compStyles.content__block___position_left}>{children}</div>
    )
}

export default ContentBlockPositionLeft;
