/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX headline component.
 */

// Core dependencies
import React from "react";

// App dependencies
import ContentBlock from "../content-block/content-block";
import {ContentBlockTheme} from "../content-block/content-block-theme.model";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";

function Headline(props) {

    const {children} = props;

    return (
        <Section type={SectionType.HEADLINE}>
            <ContentBlock theme={ContentBlockTheme.OFF_WHITE}>
                {children}
            </ContentBlock>
        </Section>
    )
}

export default Headline;
