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
        <p className={compStyles.tile__body}>{children}</p>
    )
}

export default TileBody;
