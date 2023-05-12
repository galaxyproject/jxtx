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
      <Section type={SectionType.HERO_SUB}>
        <ContentBlockHeading
          scale={HeadingScale.LARGE}
          theme={HeadingTheme.ORANGE}
        >
          Donate to JXTX
        </ContentBlockHeading>
        <ContentBlockBody scale={ContentBlockBodyScale.MEDIUM}>
        Your contribution will support the foundation's efforts providing graduate student scholarships, academic mentorship, and sponsoring student outreach.
        <br/>
        <br/>
        Join us in making a difference today!
        <br/>
        <br/>
        The JXTX Foundation 501(c)(3) application is pending, but as a temporary measure we have partnered with GalaxyWorks, co-founded by James Taylor, to accept donations at https://donate.stripe.com/cN29CbbYYbq16GIaEE.
        <br/>
        <br/>
        If you'd prefer to wait until the JXTX Foundation can accept your donation directly, simply make a pledge today with the following form and we will reach out when the foundation is ready to directly accept contributions.
        </ContentBlockBody>
      </Section>
      <Section type={SectionType.HERO_DUO}>
        <GridItem gridArea={GridArea.BLOCK}>
          <ContentBlock
            scale={ContentBlockScale.LARGE}
            theme={ContentBlockTheme.OFF_WHITE}
          >
            <ContentBlockHeading
              scale={HeadingScale.LARGE}
              theme={HeadingTheme.ORANGE}
            >
              Make a Pledge
            </ContentBlockHeading>
            <ContentBlockBody scale={ContentBlockBodyScale.MEDIUM}>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Pledge: <input name="pledge" />(optional)</label>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
            </ContentBlockBody>
            { /* }
            <ContentBlockCta scale={Scale.MEDIUM}>
              <ButtonCta
                attributeHREF={ourScholarships}
                buttonScale={ButtonScale.OVERSIZED}
                buttonTheme={ButtonTheme.SECONDARY}
                buttonType={ButtonType.UNELEVATED}
              >
                Learn More
              </ButtonCta>
            </ContentBlockCta>
            { */ }
          </ContentBlock>
        </GridItem>
        <GridItem gridArea={GridArea.THUMBNAIL}>
          <StaticImage alt={"Academic Mentorship"} src={imgMentorship} />
        </GridItem>
      </Section>
    </main>
  );
}

export default Home;
