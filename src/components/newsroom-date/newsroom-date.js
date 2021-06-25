/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX newsroom date component.
 */

// Core dependencies
import React from "react";

// Styles
import * as compStyles from "./newsroom-date.module.css";

function NewsroomDate(props) {

    const {children} = props;

    return (
        <p className={compStyles.newsroom__date}>{children}</p>
    )
}

export default NewsroomDate;
