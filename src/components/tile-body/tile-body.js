/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile body component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./tile-body.module.css";

function TileBody(props) {

    const {children} = props;

    return (
        <div className={compStyles.tile__body}>{children}</div>
    )
}

export default TileBody;
