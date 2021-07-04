/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX document metadata component.
 */

// Core dependencies
import React from "react";
import Helmet from "react-helmet";

function DocumentMetadata() {
  return (
    <Helmet>
      <title>JXTX Foundation</title>
      <html lang="en" />
    </Helmet>
  );
}

export default DocumentMetadata;
