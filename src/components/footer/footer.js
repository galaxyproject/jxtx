/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX footer component.
 */

// Core dependencies
import {Link} from "gatsby";
import React from "react";

// App dependencies
import ButtonSocial from "../button-social/button-social";

// Images
import iFacebook from "../../../images/socials/facebook.png";
import iInstagram from "../../../images/socials/instagram.png";
import iSlack from "../../../images/socials/slack.png";
import iTwitter from "../../../images/socials/twitter.png";

// Styles
import * as compStyles from "./footer.module.css";

// Template variables
const about = "/foundation/about-the-jxtx-foundation";
const donate = "/";
const events = "/";
const facebook = "/";
const home = "/";
const instagram = "";
const james = "/about-james/bio";
const news = "/";
const privacy = "/";
const scholarships = "/";
const slack = "/";
const twitter = "https://twitter.com/galaxyproject";

function Footer() {

    return (
        <footer className={compStyles.footer}>
            <div className={compStyles.footer__hero}>
                <Link className={compStyles.footer__hero__logo} to={home}>JXTX Foundation</Link>
                <div className={compStyles.footer__hero__socials}>
                    <ButtonSocial attributeHREF={facebook} iconSize={32}>
                        <img alt={"facebook"} src={iFacebook}/></ButtonSocial>
                    <ButtonSocial attributeHREF={twitter} iconSize={32}>
                        <img alt={"twitter"} src={iTwitter}/></ButtonSocial>
                    <ButtonSocial attributeHREF={instagram} iconSize={32}>
                        <img alt={"instagram"} src={iInstagram}/></ButtonSocial>
                    <ButtonSocial attributeHREF={slack} iconSize={32}>
                        <img alt={"slack"} src={iSlack}/></ButtonSocial>
                </div>
            </div>
            <div className={compStyles.footer__nav}>
                <ul>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={about}>About</Link></li>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={james}>James</Link></li>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={scholarships}>Scholarships</Link></li>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={news}>News</Link></li>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={events}>Events</Link></li>
                    <li className={compStyles.footer__nav__item}>
                        <Link to={donate}>Donate</Link></li>
                </ul>
            </div>
            <div className={compStyles.footer__legal}>
                <Link to={privacy}>Privacy</Link>
                <span>@Copyright 2021</span>
            </div>
        </footer>
    )
}

export default Footer;
