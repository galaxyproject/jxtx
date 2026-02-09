/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX donate page component.
 */

// Core dependencies
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

// App dependencies
import { ButtonTheme } from "../button/button-theme.model";
import { ButtonType } from "../button/button-type.model";
import ButtonCta from "../button-cta/button-cta";

// Styles
import * as compStyles from "./donate.module.css";

// Template variables
const imgMentorship = "../../../images/home/mentorship.png";
const imgJJ = "../../../content/_images/jj/jj-1.png";

function Donate() {
  return (
    <main className={compStyles.main}>
      <div className={compStyles.intro}>
        <h1 className={compStyles.introHeading}>Support Our Mission</h1>
        <p className={compStyles.introText}>
          The JXTX Foundation honors two mentors who shaped the Galaxy community
          through dedicated scholarship funds. Your contribution helps
          early-career researchers attend conferences, build connections, and
          advance open science.
        </p>
        <p className={compStyles.introSubtext}>
          As a registered 501(c)(3) non-profit (EIN: 93-1343317), donations are
          tax-deductible to the fullest extent permitted by law.
        </p>
      </div>
      <div className={compStyles.donateGrid}>
        <div className={compStyles.donateCard}>
          <div className={compStyles.cardImage}>
            <StaticImage
              alt={"James Taylor"}
              src={imgMentorship}
              className={compStyles.cardImg}
            />
          </div>
          <div className={compStyles.cardContent}>
            <h2 className={compStyles.cardHeading}>Donate to JXTX</h2>
            <p className={compStyles.cardText}>
              Support graduate student scholarships, academic mentorship, and
              student outreach programs that honor James Taylor's legacy.
            </p>
            <ButtonCta
              attributeHREF={
                "https://www.zeffy.com/en-US/donation-form/23234439-cf30-4d57-a12f-0cecb17df34c"
              }
              buttonTheme={ButtonTheme.PRIMARY}
              buttonType={ButtonType.UNELEVATED}
            >
              Donate Now
            </ButtonCta>
          </div>
        </div>
        <div className={compStyles.donateCard}>
          <div className={compStyles.cardImage}>
            <StaticImage
              alt={"James (JJ) Johnson"}
              src={imgJJ}
              className={compStyles.cardImg}
            />
          </div>
          <div className={compStyles.cardContent}>
            <h2 className={compStyles.cardHeading}>The JJ Fund</h2>
            <p className={compStyles.cardText}>
              Help bring new contributors into the Galaxy ecosystem while
              honoring JJ's legacy as a mentor in the Galaxy community.
            </p>
            <ButtonCta
              attributeHREF={
                "https://www.zeffy.com/en-US/donation-form/the-james-johnson-jj-travel-fellowships"
              }
              buttonTheme={ButtonTheme.SECONDARY}
              buttonType={ButtonType.UNELEVATED}
            >
              Donate to JJ Fund
            </ButtonCta>
          </div>
        </div>
      </div>
      <div className={compStyles.prospectus}>
        <p className={compStyles.prospectusText}>
          Learn more about the JXTX Foundation's mission, impact, and how your
          support makes a difference.
        </p>
        <ButtonCta
          attributeHREF={"/prospectus.pdf"}
          buttonTheme={ButtonTheme.PRIMARY}
          buttonType={ButtonType.UNELEVATED}
        >
          View Our Prospectus
        </ButtonCta>
      </div>
    </main>
  );
}

export default Donate;
