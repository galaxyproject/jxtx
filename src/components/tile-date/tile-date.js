/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile date component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./tile-date.module.css";

function TileDate(props) {

    const {children} = props;

    return (
        <div className={compStyles.tile__date}>{children}</div>
    )
}

export default TileDate;
