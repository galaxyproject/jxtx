/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile thumbnail component.
 */

// Core dependencies
import React from "react";

// App dependencies
import FigureImage from "../figure-image/figure-image";
import {TileThumbnailClassname} from "./tile-thumbnail-classname.model";

// Styles
import * as compStyles from "./tile-thumbnail.module.css";
const classNames = require("classnames");

function TileThumbnail(props) {

    const {alt, image, scale} = props;
    const classScale = TileThumbnailClassname[scale];
    const classNamesThumbnail = classNames(compStyles.tile__thumbnail, compStyles[classScale]);

    return (
        <div className={classNamesThumbnail}>
            <FigureImage alt={alt} image={image}/>
        </div>
    )
}

export default TileThumbnail;
