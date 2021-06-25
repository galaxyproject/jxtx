/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX home page component.
 */

// Core dependencies
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

// Images
import james from "../../../images/james/james.png";
import mentorship from "../../../images/home/mentorship.png";
import outreach from "../../../images/home/outreach.png";

// Template variables
const aboutJames = "/about-james/bio";
const ourScholarships = "/news/2020-10-jxtx-awardees";

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
                    In its early stages, the JXTX Foundation will provide support for graduate students to attend
                    conferences in computational biology and data science, where they can present their work and form
                    connections with other researchers in the field. Towards the goal of advancing mentorship, JXTX will
                    organize and host mentoring sessions between senior and junior faculty members at select
                    high-profile meetings.</ContentBlockBody>
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
                            Academic Mentorship
                        </ContentBlockHeading>
                        <ContentBlockBody
                            scale={ContentBlockBodyScale.LARGE}>
                            The Foundation will later expand its reach as a platform for academic mentorship. First, it
                            will operate to spark mentoring relationships among the larger computational biology and
                            data science community. Faculty and students will have an opportunity to participate in
                            periodic mentorship meetings (virtually). We expect an enthusiastic response to this
                            opportunity, and will recruit additional team members to provide organizational structure if
                            necessary.
                        </ContentBlockBody>
                    </ContentBlockPositionLeft>
                </ContentBlock>
                <ContentBlock
                    position={ContentBlockPosition.BOTTOM_RIGHT}
                    type={ContentBlockType.OFFSET}>
                    <img
                        alt={"Academic Mentorship"}
                        src={mentorship}/>
                </ContentBlock>
            </Section>
            <Section type={SectionType.OFFSET}>
                <ContentBlock
                    position={ContentBlockPosition.ABOVE}
                    type={ContentBlockType.OFFSET}>
                    <img
                        alt={"Student Outreach"}
                        src={outreach}/>
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
                            Student Outreach
                        </ContentBlockHeading>
                        <ContentBlockBody
                            scale={ContentBlockBodyScale.LARGE}>
                            In its later stages, the Foundation will sponsor in-person visits from students (high school
                            or college age) to its hotspots, which currently include Johns Hopkins and Penn State. These
                            visits are meant to attract new scholars to computational biology and data science, and in
                            particular to form connections and opportunities for members of underrepresented minorities.
                        </ContentBlockBody>
                    </ContentBlockPositionRight>
                </ContentBlock>
            </Section>
            <Section type={SectionType.HERO_SUB}>
                <ContentBlockHeading
                    scale={HeadingScale.LARGE}
                    theme={HeadingTheme.ORANGE}>
                    Our Scholarships</ContentBlockHeading>
                <ContentBlockBody
                    scale={ContentBlockBodyScale.LARGE}>
                    This Fall The JXTX Foundation will sponsor 10 graduate students to attend Genome Informatics 2021 at
                    the Cold Spring Harbor Laboratory (CSHL). In 2020 we sponsored 10 graduate students to attend the
                    2020 Biological Data Science Conference at Cold Spring Harbor Laboratory.
                </ContentBlockBody>
                <ButtonCta
                    attributeHREF={ourScholarships}
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
