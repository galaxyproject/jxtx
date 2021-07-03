/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardees component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./awardees.module.css";

function Awardees(props) {

    const {children} = props;

    return (
        <div className={compStyles.awardees}>
            {children}
        </div>
    )
}

export default Awardees;
