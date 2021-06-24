/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX figure image component.
 */

// Core dependencies
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";

function FigureImage(props) {

    const {alt, image} = props;

    return (
        <GatsbyImage alt={alt} image={getImage(image)}/>
    )
}

export default FigureImage;
