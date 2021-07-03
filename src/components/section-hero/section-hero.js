/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX section hero component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {ButtonScale} from "../button/button-scale.model";
import {ButtonType} from "../button/button-type.model";
import ButtonCTA from "../button-cta/button-cta";
import Section from "../section/section";
import {SectionType} from "../section/section-type.model";
import {Target} from "../../utils/anchor/target.model";

// Images
import hero from "../../../images/hero/hero.png";

// Styles
import * as compStyles from "./section-hero.module.css";

// Template variables
const donate = "https://give.communityfunded.com/o/eberly/i/eberly-college-of-science/s/jtech#CommunityI39hubL9i";

function SectionHero() {

    return (
        <Section type={SectionType.HERO}>
            <img alt={"JXTX"} className={compStyles.hero__image} src={hero}/>
            <div className={compStyles.hero__headline}>
                <h1 className={compStyles.hero__headline__head}>James P. Taylor Foundation for Open Science.</h1>
                <h2 className={compStyles.hero__headline__subhead}>
                    <span>“The most important job of senior faculty is to mentor junior faculty and students.”</span>
                    <span className={compStyles.hero__attribution}>@jxtx</span>
                </h2>
                <ButtonCTA
                    attributeHREF={donate}
                    attributeTarget={Target.BLANK}
                    buttonScale={ButtonScale.OVERSIZED}
                    buttonType={ButtonType.HERO}>
                    Donate
                </ButtonCTA>
            </div>
        </Section>
    )
}

export default SectionHero;
