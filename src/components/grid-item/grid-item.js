/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid item component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-item.module.css";

function GridItem(props) {

    const {children} = props;

    return (
        <div className={compStyles.grid__item}>
            {children}
        </div>
    )
}

export default GridItem;
