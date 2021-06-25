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
import ContentBlockBody from "../content-block-body/content-block-body";
import {ContentBlockBodyScale} from "../content-block-body/content-block-body-scale.model";
import ContentBlock from "../content-block/content-block";
import {ContentBlockPosition} from "../content-block/content-block-position.model";
import {ContentBlockScale} from "../content-block/content-block-scale.model";
import {ContentBlockTheme} from "../content-block/content-block-theme.model";
import {ContentBlockType} from "../content-block/content-block-type.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import ContentBlockPositionLeft from "../content-block-position-left/content-block-position-left";
import ContentBlockPositionRight from "../content-block-position-right/content-block-position-right";
import {HeadingScale} from "../heading/heading-scale.model";
import {HeadingTheme} from "../heading/heading-theme.model";
import SectionHero from "../section-hero/section-hero";
import SectionNewsroom from "../section-newsroom/section-newsroom";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";
import TileLink from "../tile-link/tile-link";
import {Relationship} from "../../utils/anchor/relationship.model";
import {Target} from "../../utils/anchor/target.model";

// Images
import connections from "../../../images/home/connections.png";
import james from "../../../images/james/james.png";
import mentorship from "../../../images/home/mentorship.png";
import outreach from "../../../images/home/outreach.png";

// Template variables
const aboutJames = "/about-james/bio";

function Home() {

    return (
        <main>
            <SectionHero/>
            <Section type={SectionType.HERO_SUB}>
                <ContentBlockHeading
                    scale={HeadingScale.LARGE}
                    theme={HeadingTheme.ORANGE}>
                    Our Mission</ContentBlockHeading>
                <ContentBlockBody
                    scale={ContentBlockBodyScale.LARGE}>
                    Organizing and host mentoring sessions between senior and junior faculty members at select
                    high-profile meetings. Organizing and host mentoring sessions between senior and junior faculty
                    members at select high-profile meetings.</ContentBlockBody>
            </Section>
            <Section type={SectionType.OFFSET}>
                <ContentBlock
                    scale={ContentBlockScale.MEDIUM}
                    theme={ContentBlockTheme.OFF_WHITE}
                    type={ContentBlockType.OFFSET}>
                    <ContentBlockPositionLeft>
                        <ContentBlockHeading
                            scale={HeadingScale.LARGE}
                            theme={HeadingTheme.ORANGE}>
                            Creating Connections
                        </ContentBlockHeading>
                        <ContentBlockBody
                            scale={ContentBlockBodyScale.LARGE}>
                            Organizing and host mentoring sessions between senior and junior faculty members at select
                            high-profile meetings.
                        </ContentBlockBody>
                    </ContentBlockPositionLeft>
                </ContentBlock>
                <ContentBlock
                    position={ContentBlockPosition.BOTTOM_RIGHT}
                    type={ContentBlockType.OFFSET}>
                    <img
                        alt={"Creating Connections"}
                        src={connections}/>
                </ContentBlock>
            </Section>
            <Section type={SectionType.OFFSET}>
                <ContentBlock
                    position={ContentBlockPosition.ABOVE}
                    type={ContentBlockType.OFFSET}>
                    <img
                        alt={"Academic Mentorship"}
                        src={mentorship}/>
                </ContentBlock>
                <ContentBlock
                    position={ContentBlockPosition.BOTTOM_RIGHT}
                    scale={ContentBlockScale.MEDIUM}
                    theme={ContentBlockTheme.OFF_WHITE}
                    type={ContentBlockType.OFFSET}>
                    <ContentBlockPositionRight>
                        <ContentBlockHeading
                            scale={HeadingScale.LARGE}
                            theme={HeadingTheme.ORANGE}>
                            Academic Mentorship
                        </ContentBlockHeading>
                        <ContentBlockBody
                            scale={ContentBlockBodyScale.LARGE}>
                            Creating mentoring relationships among the larger computational biology and data science
                            community.
                        </ContentBlockBody>
                    </ContentBlockPositionRight>
                </ContentBlock>
            </Section>
            <Section type={SectionType.OFFSET}>
                <ContentBlock
                    scale={ContentBlockScale.MEDIUM}
                    theme={ContentBlockTheme.OFF_WHITE}
                    type={ContentBlockType.OFFSET}>
                    <ContentBlockPositionLeft>
                        <ContentBlockHeading
                            scale={HeadingScale.LARGE}
                            theme={HeadingTheme.ORANGE}>
                            Student Outreach
                        </ContentBlockHeading>
                        <ContentBlockBody
                            scale={ContentBlockBodyScale.LARGE}>
                            Attract new scholars to computational biology and data science, particularly for
                            underrepresented minorities.
                        </ContentBlockBody>
                    </ContentBlockPositionLeft>
                </ContentBlock>
                <ContentBlock
                    position={ContentBlockPosition.BOTTOM_RIGHT}
                    type={ContentBlockType.OFFSET}>
                    <img
                        alt={"Student Outreach"}
                        src={outreach}/>
                </ContentBlock>
            </Section>
            <Section type={SectionType.HERO_SUB}>
                <ContentBlockHeading
                    scale={HeadingScale.LARGE}
                    theme={HeadingTheme.ORANGE}>
                    Our First Scholarships</ContentBlockHeading>
                <ContentBlockBody
                    scale={ContentBlockBodyScale.LARGE}>
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
            <Section type={SectionType.HERO_TILE}>
                <TileLink to={aboutJames}/>
                <ContentBlock>
                    <img
                        alt={"James Taylor"}
                        src={james}/>
                </ContentBlock>
                <ContentBlock
                    scale={ContentBlockScale.LARGE}
                    theme={ContentBlockTheme.OFF_WHITE}>
                    <ContentBlockHeading
                        scale={HeadingScale.LARGE}
                        theme={HeadingTheme.BLUE}>
                        James Taylor</ContentBlockHeading>
                    <ContentBlockBody
                        scale={ContentBlockBodyScale.LARGE}>
                        James Taylor started his professional path at the University of Vermont, where he received a BS
                        in Computer Science in 2000. In 2003, after working as a software engineer in the private
                        sector, he found that his real purpose in life was elsewhere.</ContentBlockBody>
                </ContentBlock>
            </Section>
            <SectionNewsroom/>
        </main>
    )
}

export default Home;
