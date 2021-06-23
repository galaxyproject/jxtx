/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX grid component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./grid.module.css";

function Grid(props) {

    const {children, columns} = props;
    const x = columns ? columns : 1;
    const classByX = `grid___x${x}`;

    return (
        <div className={compStyles[classByX]}>
            {children}
        </div>
    )
}

export default Grid;
