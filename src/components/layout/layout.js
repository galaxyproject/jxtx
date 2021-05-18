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

function Layout(props) {

    const {children} = props;

    return (
        <>
            <DocumentMetadata/>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;
