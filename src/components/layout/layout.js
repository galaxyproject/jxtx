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
import DocumentMetadata from "../document-metadata/document-metadata";
import Footer from "../footer/footer";
import Header from "../header/header";

// Styles
import "../../styles/globals.module.css"
import "../../styles/vars.module.css";
import "../../styles/viewport-units.module.css";

function Layout(props) {

    const {children, headerMinor} = props;

    return (
        <>
            <DocumentMetadata/>
            <Header headerMinor={headerMinor}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;
