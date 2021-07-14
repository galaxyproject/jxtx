/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX layout component.
 * Generic site layout component comprising of JXTX header and footer.
 */

// Core dependencies
import React from "react";

// App dependencies
import CookiesBanner from "../banner-cookies/banner-cookies";
import DocumentMetadata from "../document-metadata/document-metadata";
import Footer from "../footer/footer";
import Header from "../header/header";

// Styles
import * as compStyles from "./layout.module.css";
import "../../styles/globals.module.css";
import "../../styles/vars.module.css";
import "../../styles/viewport-units.module.css";

function Layout(props) {
  const { children, frontmatter, headerMinor, slug } = props;

  return (
    <>
      <DocumentMetadata frontmatter={frontmatter} slug={slug} />
      <div className={compStyles.site}>
        <Header headerMinor={headerMinor} />
        {children}
        <CookiesBanner />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
