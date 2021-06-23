/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX tile thumbnail component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ImageStaticQuery} from "../../hooks/image-query";
import {TileThumbnailClassname} from "./tile-thumbnail-classname.model";

// Images
import placeholder from "../../../images/placeholder.png";

// Styles
import * as compStyles from "./tile-thumbnail.module.css";
const classNames = require("classnames");

function TileThumbnail(props) {

    const {imageDescription, imageName, scale} = props;
    const attributeAlt = imageDescription || "JXTX";
    const images = ImageStaticQuery();
    const classScale = TileThumbnailClassname[scale];
    const classNamesThumbnail = classNames(compStyles.tile__thumbnail, compStyles[classScale]);

    const getImage = () => {

        if ( imageName ) {

            const image = images.find(img => img?.fluid?.originalName === imageName);
            return image?.fluid?.src;
        }

        return placeholder;
    }

    return (
        <div className={classNamesThumbnail}>
            <img
                alt={attributeAlt}
                className={compStyles.tile__thumbnail__image}
                src={getImage()}/>
        </div>
    )
}

export default TileThumbnail;
