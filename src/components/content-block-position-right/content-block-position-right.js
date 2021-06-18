/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block position right component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./content-block-position-right.module.css";

function ContentBlockPositionRight(props) {

    const {children} = props;

    return (
        <div className={compStyles.content__block___position_right}>{children}</div>
    )
}

export default ContentBlockPositionRight;
