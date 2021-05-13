/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX header component.
 */

// Core dependencies
import {Link} from "gatsby";
import React from "react";

// App dependencies
import {ButtonTheme} from "../button/button-theme.model";
import {ButtonType} from "../button/button-type.model";
import ButtonCTA from "../button-cta/button-cta";
import {Relationship} from "../../utils/anchor/relationship.model";
import {Target} from "../../utils/anchor/target.model";

// Images
import JXTX from "../../../images/jxtx.png";

// Styles
import * as compStyles from "./header.module.css";

// Template variables
const about = "/foundation/about-the-jxtx-foundation";
const donate = "/";
const events = "/";
const home = "/";
const james = "/about-james/bio";
const news = "/"
const scholarships = "/";

function Header() {

    return (
        <header className={compStyles.header}>
            <Link className={compStyles.header__logo} to={home}>
                <img alt={"JXTX"}
                     className={compStyles.header__logo__img}
                     src={JXTX}/>
                <span className={compStyles.header__logo__title}>JXTX Foundation</span>
            </Link>
            <nav className={compStyles.header__nav}>
                <ul className={compStyles.header__nav__list}>
                    <li className={compStyles.header__nav__item}>
                        <Link activeClassName={compStyles.header__nav__link___active}
                              className={compStyles.header__nav__link}
                              to={about}>About</Link></li>
                    <li className={compStyles.header__nav__item}>
                        <Link activeClassName={compStyles.header__nav__link___active}
                              className={compStyles.header__nav__link}
                              to={james}>James</Link></li>
                    <li className={compStyles.header__nav__item}>
                        <Link activeClassName={compStyles.header__nav__link___active}
                              className={compStyles.header__nav__link}
                              to={scholarships}>Scholarships</Link></li>
                    <li className={compStyles.header__nav__item}>
                        <Link activeClassName={compStyles.header__nav__link___active}
                              className={compStyles.header__nav__link}
                              to={news}>News</Link></li>
                    <li className={compStyles.header__nav__item}>
                        <Link activeClassName={compStyles.header__nav__link___active}
                              className={compStyles.header__nav__link}
                              to={events}>Events</Link></li>
                </ul>
            </nav>
            <ButtonCTA attributeHREF={donate}
                       attributeRel={Relationship.NOOPENER_NOREFERRER}
                       attributeTarget={Target.BLANK}
                       buttonTheme={ButtonTheme.PRIMARY}
                       buttonType={ButtonType.UNELEVATED}>Donate</ButtonCTA>
        </header>
    )
}

export default Header;
