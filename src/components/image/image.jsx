/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX image component.
 */

// Core dependencies
import React from "react";

// App dependencies
import CompatImage from "../compat-image/compat-image";

/* `image` arrives pre-resolved: pages resolve frontmatter images with resolveImage() and pass
   the array into MDX scope, so content's image={props.images[N]} lands here as ResolvedImage. */
function Image(props) {
  const { alt, image } = props;
  return <CompatImage alt={alt} image={image} />;
}

export default Image;
