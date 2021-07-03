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
import ContentBlockCta from "../content-block-cta/content-block-cta";
import ContentBlockBody from "../content-block-body/content-block-body";
import {ContentBlockBodyScale} from "../content-block-body/content-block-body-scale.model";
import ContentBlock from "../content-block/content-block";
import {ContentBlockScale} from "../content-block/content-block-scale.model";
import {ContentBlockTheme} from "../content-block/content-block-theme.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import {HeadingScale} from "../heading/heading-scale.model";
import {HeadingTheme} from "../heading/heading-theme.model";
import SectionHero from "../section-hero/section-hero";
import SectionNewsroom from "../section-newsroom/section-newsroom";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";
import TileLink from "../tile-link/tile-link";
import {Scale} from "../ui/scale/scale.model";

// Images
import james from "../../../images/james/james.png";
import mentorship from "../../../images/home/mentorship.png";
import outreach from "../../../images/home/outreach.png";

// Template variables
const aboutFoundation = "/foundation/about-the-jxtx-foundation";
const aboutJames = "/about-james/bio";
const ourScholarships = "/scholarships";

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
            <Section type={SectionType.HERO_TILE}>
                <TileLink to={aboutFoundation}/>
                <ContentBlock
                    scale={ContentBlockScale.LARGE}
                    theme={ContentBlockTheme.OFF_WHITE}>
                    <ContentBlockHeading
                        scale={HeadingScale.LARGE}
                        theme={HeadingTheme.ORANGE}>
                        Academic Mentorship
                    </ContentBlockHeading>
                    <ContentBlockBody
                        scale={ContentBlockBodyScale.LARGE}>
                        The Foundation will later expand its reach as a platform for academic mentorship.
                    </ContentBlockBody>
                    <ContentBlockCta scale={Scale.MEDIUM}>
                        <ButtonCta
                            attributeHREF={aboutFoundation}
                            buttonType={ButtonType.TEXT}>
                            Learn More
                        </ButtonCta>
                    </ContentBlockCta>
                </ContentBlock>
                <ContentBlock>
                    <img
                        alt={"Academic Mentorship"}
                        src={mentorship}/>
                </ContentBlock>
            </Section>
            <Section type={SectionType.HERO_TILE}>
                <TileLink to={aboutFoundation}/>
                <ContentBlock>
                    <img
                        alt={"Student Outreach"}
                        src={outreach}/>
                </ContentBlock>
                <ContentBlock
                    scale={ContentBlockScale.LARGE}
                    theme={ContentBlockTheme.OFF_WHITE}>
                    <ContentBlockHeading
                        scale={HeadingScale.LARGE}
                        theme={HeadingTheme.ORANGE}>
                        Student Outreach
                    </ContentBlockHeading>
                    <ContentBlockBody
                        scale={ContentBlockBodyScale.LARGE}>
                        In its later stages, the Foundation will sponsor in-person visits from students (high school
                        or college age) to its hotspots, which currently include Johns Hopkins and Penn State.
                    </ContentBlockBody>
                    <ContentBlockCta scale={Scale.MEDIUM}>
                        <ButtonCta
                            attributeHREF={aboutFoundation}
                            buttonType={ButtonType.TEXT}>
                            Learn More
                        </ButtonCta>
                    </ContentBlockCta>
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
                <ContentBlockCta scale={Scale.LARGE}>
                    <ButtonCta
                        attributeHREF={ourScholarships}
                        buttonScale={ButtonScale.OVERSIZED}
                        buttonTheme={ButtonTheme.SECONDARY}
                        buttonType={ButtonType.UNELEVATED}>
                        Learn More
                    </ButtonCta>
                </ContentBlockCta>
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
