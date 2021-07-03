/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid unus component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid-unus.module.css";

function GridUnus(props) {

    const {children} = props;

    return (
        <div className={compStyles.grid___unus}>
            {children}
        </div>
    )
}

export default GridUnus;
