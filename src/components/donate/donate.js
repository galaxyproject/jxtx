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
import { ButtonTheme } from "../button/button-theme.model";
import { ButtonType } from "../button/button-type.model";
import ButtonCta from "../button-cta/button-cta";
import ContentBlockCta from "../content-block-cta/content-block-cta";
import ContentBlockBody from "../content-block-body/content-block-body";
import { ContentBlockBodyScale } from "../content-block-body/content-block-body-scale.model";
import ContentBlock from "../content-block/content-block";
import { ContentBlockScale } from "../content-block/content-block-scale.model";
import ContentBlockHeading from "../content-block-heading/content-block-heading";
import GridItem from "../grid-item/grid-item";
import { HeadingScale } from "../heading/heading-scale.model";
import { HeadingTheme } from "../heading/heading-theme.model";
import Section from "../section/section";
import { SectionType } from "../section/section-type.model";
import { GridArea } from "../ui/grid-area/grid-area.model";
import { Scale } from "../ui/scale/scale.model";

// Styles
import * as compStyles from "./donate.module.css";

// Template variables
const imgMentorship = "../../../images/home/mentorship.png";
const imgJJ = "../../../content/_images/jj/jj-1.png";

function Home() {
  return (
    <main className={compStyles.main}>
      <Section type={SectionType.HERO_DUO}>
        <GridItem gridArea={GridArea.BLOCK}>
          <ContentBlock scale={ContentBlockScale.LARGE}>
            <ContentBlockHeading
              scale={HeadingScale.LARGE}
              theme={HeadingTheme.ORANGE}
            >
              Donate to JXTX
            </ContentBlockHeading>
            <ContentBlockBody scale={ContentBlockBodyScale.MEDIUM}>
              <p>
                Your contribution will support the foundation's efforts
                providing graduate student scholarships, academic mentorship,
                and sponsoring student outreach.
              </p>
              <p>
                As a registered 501(c)(3) non-profit organization, your
                donations are tax-deductible to the fullest extent permitted by
                law. Your support helps us continue our mission, and we are
                grateful for your generosity and commitment to our cause.
                <ContentBlockCta scale={Scale.MEDIUM}>
                  <ButtonCta
                    attributeHREF={
                      "https://www.zeffy.com/en-US/donation-form/23234439-cf30-4d57-a12f-0cecb17df34c"
                    }
                    buttonTheme={ButtonTheme.PRIMARY}
                    buttonType={ButtonType.UNELEVATED}
                  >
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
      <Section type={SectionType.HERO_DUO}>
        <GridItem gridArea={GridArea.BLOCK}>
          <ContentBlock scale={ContentBlockScale.LARGE}>
            <ContentBlockHeading
              scale={HeadingScale.MEDIUM}
              theme={HeadingTheme.ORANGE}
            >
              Special Initiatives
            </ContentBlockHeading>
            <ContentBlockBody scale={ContentBlockBodyScale.MEDIUM}>
              <p>
                <strong>The James Johnson (JJ) Travel Fellowships</strong> -
                Help bring new contributors into the Galaxy ecosystem while
                honoring JJ's legacy as a contributor and mentor in the Galaxy
                and University of Minnesota communities.
              </p>
              <ContentBlockCta scale={Scale.MEDIUM}>
                <ButtonCta
                  attributeHREF={
                    "https://www.zeffy.com/en-US/donation-form/the-james-johnson-jj-travel-fellowships"
                  }
                  buttonTheme={ButtonTheme.SECONDARY}
                  buttonType={ButtonType.UNELEVATED}
                >
                  Donate to JJ Fund
                </ButtonCta>
                <Link
                  to="/scholarships/jj-fund"
                  className={compStyles.learnMoreLink}
                >
                  Learn More
                </Link>
              </ContentBlockCta>
            </ContentBlockBody>
          </ContentBlock>
        </GridItem>
        <GridItem gridArea={GridArea.THUMBNAIL}>
          <StaticImage alt={"Academic Mentorship"} src={imgJJ} />
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
