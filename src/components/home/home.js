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
import {ContentBlockPosition} from "../content-block/content-block-position.model";
import {ContentBlockScale} from "../content-block/content-block-scale.model";
import {ContentBlockTheme} from "../content-block/content-block-theme.model";
import {ContentBlockType} from "../content-block/content-block-type.model";
import ContentBlockBody from "../content-block-body/content-block-body";
import {ContentBlockBodyScale} from "../content-block-body/content-block-body-scale.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import ContentBlockPositionLeft from "../content-block-position-left/content-block-position-left";
import ContentBlockPositionRight from "../content-block-position-right/content-block-position-right";
import {HeadingTheme} from "../heading/heading-theme.model";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";
import SectionHero from "../section-hero/section-hero";
import {Relationship} from "../../utils/anchor/relationship.model";
import {Target} from "../../utils/anchor/target.model";

// Images
import connections from "../../../images/home/connections.png";
import james from "../../../images/james/james.png";
import mentorship from "../../../images/home/mentorship.png";
import outreach from "../../../images/home/outreach.png";

function Home() {

    return (
        <main>
            <SectionHero/>
            <Section sectionType={SectionType.BANNER}>
                <ContentBlockHeading
                    headingTheme={HeadingTheme.ORANGE}>
                    Our Mission</ContentBlockHeading>
                <ContentBlockBody
                    bodyScale={ContentBlockBodyScale.OVERSIZED}>
                    Organizing and host mentoring sessions between senior and junior faculty members at select
                    high-profile meetings. Organizing and host mentoring sessions between senior and junior faculty
                    members at select high-profile meetings.</ContentBlockBody>
            </Section>
            <Section sectionType={SectionType.OFFSET}>
                <ContentBlock
                    blockScale={ContentBlockScale.STANDARD}
                    blockTheme={ContentBlockTheme.OFF_WHITE}
                    blockType={ContentBlockType.OFFSET}>
                    <ContentBlockPositionLeft>
                        <ContentBlockHeading
                            headingTheme={HeadingTheme.ORANGE}>
                            Creating Connections
                        </ContentBlockHeading>
                        <ContentBlockBody
                            bodyScale={ContentBlockBodyScale.OVERSIZED}>
                            Organizing and host mentoring sessions between senior and junior faculty members at select
                            high-profile meetings.
                        </ContentBlockBody>
                    </ContentBlockPositionLeft>
                </ContentBlock>
                <ContentBlock
                    blockPosition={ContentBlockPosition.BOTTOM_RIGHT}
                    blockType={ContentBlockType.OFFSET}>
                    <img
                        alt={"Creating Connections"}
                        src={connections}
                        style={{margin: 0}}/>
                </ContentBlock>
            </Section>
            <Section sectionType={SectionType.OFFSET}>
                <ContentBlock
                    blockPosition={ContentBlockPosition.ABOVE}
                    blockType={ContentBlockType.OFFSET}>
                    <img
                        alt={"Academic Mentorship"}
                        src={mentorship}
                        style={{margin: 0}}/>
                </ContentBlock>
                <ContentBlock
                    blockPosition={ContentBlockPosition.BOTTOM_RIGHT}
                    blockScale={ContentBlockScale.STANDARD}
                    blockTheme={ContentBlockTheme.OFF_WHITE}
                    blockType={ContentBlockType.OFFSET}>
                    <ContentBlockPositionRight>
                        <ContentBlockHeading
                            headingTheme={HeadingTheme.ORANGE}>
                            Academic Mentorship
                        </ContentBlockHeading>
                        <ContentBlockBody
                            bodyScale={ContentBlockBodyScale.OVERSIZED}>
                            Creating mentoring relationships among the larger computational biology and data science
                            community.
                        </ContentBlockBody>
                    </ContentBlockPositionRight>
                </ContentBlock>
            </Section>
            <Section sectionType={SectionType.OFFSET}>
                <ContentBlock
                    blockScale={ContentBlockScale.STANDARD}
                    blockTheme={ContentBlockTheme.OFF_WHITE}
                    blockType={ContentBlockType.OFFSET}>
                    <ContentBlockPositionLeft>
                        <ContentBlockHeading
                            headingTheme={HeadingTheme.ORANGE}>
                            Student Outreach
                        </ContentBlockHeading>
                        <ContentBlockBody
                            bodyScale={ContentBlockBodyScale.OVERSIZED}>
                            Attract new scholars to computational biology and data science, particularly for
                            underrepresented minorities.
                        </ContentBlockBody>
                    </ContentBlockPositionLeft>
                </ContentBlock>
                <ContentBlock
                    blockPosition={ContentBlockPosition.BOTTOM_RIGHT}
                    blockType={ContentBlockType.OFFSET}>
                    <img
                        alt={"Student Outreach"}
                        src={outreach}
                        style={{margin: 0}}/>
                </ContentBlock>
            </Section>
            <Section sectionType={SectionType.BANNER}>
                <ContentBlockHeading
                    headingTheme={HeadingTheme.ORANGE}>
                    Our First Scholarships</ContentBlockHeading>
                <ContentBlockBody
                    bodyScale={ContentBlockBodyScale.OVERSIZED}>
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
                        bodyScale={ContentBlockBodyScale.OVERSIZED}>
                        James Taylor started his professional path at the University of Vermont, where he received a BS
                        in Computer Science in 2000. In 2003, after working as a software engineer in the private
                        sector, he found that his real purpose in life was elsewhere.</ContentBlockBody>
                </ContentBlock>
            </Section>
        </main>
    )
}

export default Home;
