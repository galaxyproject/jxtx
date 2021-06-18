/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX home page component.
 */

// Core dependencies
import {Link} from "gatsby";
import React from "react";

// App dependencies
import {ButtonScale} from "../button/button-scale.model";
import {ButtonTheme} from "../button/button-theme.model";
import {ButtonType} from "../button/button-type.model";
import ButtonCta from "../button-cta/button-cta";
import ContentBlock from "../content-block/content-block";
import {ContentBlockScale} from "../content-block/content-block-scale.model";
import {ContentBlockTheme} from "../content-block/content-block-theme.model";
import ContentBlockBody from "../content-block-body/content-block-body";
import {ContentBlockBodyType} from "../content-block-body/content-block-body-type.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import {HeadingTheme} from "../heading/heading-theme.model";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";
import SectionHero from "../section-hero/section-hero";
import {Relationship} from "../../utils/anchor/relationship.model";
import {Target} from "../../utils/anchor/target.model";

// Images
import james from "../../../images/james/james.png";

function Home() {

    return (
        <main>
            <SectionHero/>
            <Section sectionType={SectionType.BANNER}>
                <ContentBlockHeading
                    headingTheme={HeadingTheme.ORANGE}>
                    Our Mission</ContentBlockHeading>
                <ContentBlockBody
                    bodyType={ContentBlockBodyType.OVERSIZED}>
                    Organizing and host mentoring sessions between senior and junior faculty members at select
                    high-profile meetings. Organizing and host mentoring sessions between senior and junior faculty
                    members at select high-profile meetings.</ContentBlockBody>
            </Section>
            <Section sectionType={SectionType.BANNER}>
                <ContentBlockHeading
                    headingTheme={HeadingTheme.ORANGE}>
                    Our First Scholarships</ContentBlockHeading>
                <ContentBlockBody
                    bodyType={ContentBlockBodyType.OVERSIZED}>
                    The JXTX Foundation's first activity is to <Link to={"/"}>sponsor 10 graduate students</Link> to
                    attend the 2020 Biological Data Science Conference at Cold Spring Harbor Laboratory. Awards were
                    competitive and we are delighted with our first round of scholarships.</ContentBlockBody>
                <ButtonCta
                    attributeHREF={"/"}
                    attributeRel={Relationship.NOOPENER_NOREFERRER}
                    attributeTarget={Target.BLANK}
                    buttonScale={ButtonScale.OVERSIZED}
                    buttonTheme={ButtonTheme.SECONDARY}
                    buttonType={ButtonType.UNELEVATED}>
                    Learn More
                </ButtonCta>
            </Section>
            <Section sectionType={SectionType.BIFOLD}>
                <ContentBlock>
                    <img
                        alt={"James Taylor"}
                        src={james}
                        style={{margin: 0}}/>
                </ContentBlock>
                <ContentBlock
                    blockScale={ContentBlockScale.OVERSIZED}
                    blockTheme={ContentBlockTheme.OFF_WHITE}>
                    <ContentBlockHeading
                        headingTheme={HeadingTheme.BLUE}>
                        James Taylor</ContentBlockHeading>
                    <ContentBlockBody
                        bodyType={ContentBlockBodyType.OVERSIZED}>
                        James Taylor started his professional path at the University of Vermont, where he received a BS
                        in Computer Science in 2000. In 2003, after working as a software engineer in the private
                        sector, he found that his real purpose in life was elsewhere.</ContentBlockBody>
                </ContentBlock>
            </Section>
        </main>
    )
}

export default Home;
