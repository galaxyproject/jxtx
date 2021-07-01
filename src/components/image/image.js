/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX image component.
 */

// Core dependencies
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";

function Image(props) {

    const {alt, image} = props;

    return (
        <GatsbyImage alt={alt} image={getImage(image)}/>
    )
}

export default Image;
