/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX image component.
 */

// Core dependencies
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function Image(props) {
  console.debug("IMAGE PROPS ARE", props)
  const { alt } = props;
  const image = getImage(props.image);
  console.debug("Both", alt, props.image, image);
  return <GatsbyImage alt={alt} image={image} />;
}

export default Image;
