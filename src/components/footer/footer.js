/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX footer component.
 */

// Core dependencies
import { Link } from "gatsby";
import React from "react";

// App dependencies
import ButtonSocial from "../button-social/button-social";
import { Target } from "../../utils/anchor/target.model";

// Images
// import iFacebook from "../../../images/socials/facebook.png";
// import iInstagram from "../../../images/socials/instagram.png";
// import iSlack from "../../../images/socials/slack.png";
import iTwitter from "../../../images/socials/twitter.png";

// Styles
import * as compStyles from "./footer.module.css";

// Template variables
const about = "/about";
const donate =
  "https://give.communityfunded.com/o/eberly/i/eberly-college-of-science/s/jtech#CommunityI39hubL9i";
// const facebook = "/";
const home = "/";
// const instagram = "/";
const james = "/james";
const news = "/news";
// const privacy = "/";
const scholarships = "/scholarships";
// const slack = "/";
const twitter = "https://twitter.com/jxtxFoundation";

function Footer() {
  return (
    <footer className={compStyles.footer}>
      <div className={compStyles.footer__hero}>
        <Link className={compStyles.footer__hero__logo} to={home}>
          JXTX Foundation
        </Link>
        <div className={compStyles.footer__hero__socials}>
          {/*    <ButtonSocial attributeHREF={facebook} iconSize={32}>*/}
          {/*        <img alt={"facebook"} src={iFacebook}/></ButtonSocial>*/}
          <ButtonSocial attributeHREF={twitter} iconSize={32}>
            <img alt={"twitter"} src={iTwitter} />
          </ButtonSocial>
          {/*    <ButtonSocial attributeHREF={instagram} iconSize={32}>*/}
          {/*        <img alt={"instagram"} src={iInstagram}/></ButtonSocial>*/}
          {/*    <ButtonSocial attributeHREF={slack} iconSize={32}>*/}
          {/*        <img alt={"slack"} src={iSlack}/></ButtonSocial>*/}
        </div>
      </div>
      <div className={compStyles.footer__nav}>
        <ul>
          <li className={compStyles.footer__nav__item}>
            <Link to={about} className={compStyles.footer__nav__link}>
              About
            </Link>
          </li>
          <li className={compStyles.footer__nav__item}>
            <Link to={james} className={compStyles.footer__nav__link}>
              James
            </Link>
          </li>
          <li className={compStyles.footer__nav__item}>
            <Link to={scholarships} className={compStyles.footer__nav__link}>
              Scholarships
            </Link>
          </li>
          <li className={compStyles.footer__nav__item}>
            <Link to={news} className={compStyles.footer__nav__link}>
              News
            </Link>
          </li>
          <li className={compStyles.footer__nav__item}>
            <a
              href={donate}
              className={compStyles.footer__nav__link}
              target={Target.BLANK}
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
      <div className={compStyles.footer__legal}>
        {/*<Link to={privacy}>Privacy</Link>*/}
        <span className={compStyles.footer__legal__copy}>@Copyright 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
