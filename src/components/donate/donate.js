/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX home page component.
 */

// Core dependencies
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

// App dependencies
import { ButtonScale } from "../button/button-scale.model";
import { ButtonTheme } from "../button/button-theme.model";
import { ButtonType } from "../button/button-type.model";
import ButtonCta from "../button-cta/button-cta";
import ContentBlockCta from "../content-block-cta/content-block-cta";
import ContentBlockBody from "../content-block-body/content-block-body";
import { ContentBlockBodyScale } from "../content-block-body/content-block-body-scale.model";
import ContentBlock from "../content-block/content-block";
import { ContentBlockScale } from "../content-block/content-block-scale.model";
import { ContentBlockTheme } from "../content-block/content-block-theme.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import GridItem from "../grid-item/grid-item";
import { HeadingScale } from "../heading/heading-scale.model";
import { HeadingTheme } from "../heading/heading-theme.model";
import SectionHero from "../section-hero/section-hero";
import SectionNewsroom from "../section-newsroom/section-newsroom";
import Section from "../section/section";
import { SectionType } from "../section/section-type.model";
import { GridArea } from "../ui/grid-area/grid-area.model";
import { Scale } from "../ui/scale/scale.model";

// Styles
import * as compStyles from "./donate.module.css";

// Template variables
const aboutFoundation = "about";
const aboutJames = "/james";
const imgJames = "../../../images/james/james.png";
const imgMentorship = "../../../images/home/mentorship.png";
const imgShoes = "../../../images/logo-jxtx-sticker-square.png";

function Home() {
    return (
        <main className={compStyles.main}>
            <Section type={SectionType.HERO_DUO}>
                <GridItem gridArea={GridArea.BLOCK}>
                    <ContentBlock scale={ContentBlockScale.LARGE} >
                <ContentBlockHeading scale={HeadingScale.LARGE} theme={HeadingTheme.ORANGE}>
                    Donate to JXTX
                </ContentBlockHeading>
                <ContentBlockBody scale={ContentBlockBodyScale.MEDIUM}>
                    <p>
                        Your contribution will support the foundation's efforts providing graduate student scholarships,
                        academic mentorship, and sponsoring student outreach.
                    </p>
                    <p>
                        The JXTX Foundation 501(c)(3) application is pending, but as a temporary measure we have
                        partnered with GalaxyWorks, co-founded by James Taylor, to accept donations using the 'Donate Now' button below.
                    <ContentBlockCta scale={Scale.MEDIUM}>
                        <ButtonCta
                            attributeHREF={"https://www.zeffy.com/en-US/fundraising/588f76f8-0986-4b34-a86a-bbd4da352096"}
                            buttonTheme={ButtonTheme.PRIMARY}
                            buttonType={ButtonType.UNELEVATED}>
                            Donate Now
                        </ButtonCta>
                    </ContentBlockCta>
                    </p>
                </ContentBlockBody>
                    </ContentBlock>
                </GridItem>
                <GridItem gridArea={GridArea.THUMBNAIL}>
                    <StaticImage alt={"Academic Mentorship"} src={imgMentorship} />
                </GridItem>
            </Section>
            <Section>
                <ContentBlock>
                    <ContentBlockBody></ContentBlockBody>
                </ContentBlock>
            </Section>
        </main>
    );
}

export default Home;
