/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX content block body component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ContentBlockBodyClassname} from "./content-block-body-classname.model";

// Styles
import * as compStyles from "./content-block-body.module.css";

function ContentBlockBody(props) {

    const {bodyScale, children} = props;
    const classBodyScale = ContentBlockBodyClassname[bodyScale];

    return (
        <p className={compStyles[classBodyScale]}>{children}</p>
    )
}

export default ContentBlockBody;
