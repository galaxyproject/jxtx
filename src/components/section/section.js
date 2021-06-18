/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX section component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {SectionClassname} from "./section-classname.model";

// Styles
import * as compStyles from "./section.module.css";

function Section(props) {

    const {children, sectionType} = props;
    const classNameSection = SectionClassname[sectionType];

    return (
        <section className={compStyles[classNameSection]}>
            {children}
        </section>
    )
}

export default Section;
