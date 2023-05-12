/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX header component.
 */

// Core dependencies
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useCallback, useEffect, useRef, useState } from "react";

// App dependencies
import Button from "../button/button";
import { ButtonTheme } from "../button/button-theme.model";
import { ButtonType } from "../button/button-type.model";
import ButtonCTA from "../button-cta/button-cta";
import { Target } from "../../utils/anchor/target.model";

// Images
import burger from "../../../images/header/burger.svg";

// Styles
import * as compStyles from "./header.module.css";
const classNames = require("classnames");

// Template variables
const about = "/about";
const donate = "/donate";
const home = "/";
const james = "/james";
const jxtx = "../../../images/jxtx.png";
const news = "/news";
const scholarships = "/scholarships";

function Header(props) {
  const { headerMinor } = props;
  const bodyRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Closes menu on resize.
   * @type {(function(*): void)|*}
   */
  const onMediaTablet = useCallback((mediaQuery) => {
    if (mediaQuery.matches) {
      /* Close menu. */
      setMenuOpen(false);
    }
  }, []);

  /* useEffect - componentDidMount/componentWillUnmount. */
  useEffect(() => {
    bodyRef.current = document.body;
  }, []);

  /* useEffect - componentDidMount/componentWillUnmount. */
  /* Listeners - media queries. */
  useEffect(() => {
    const mediaTablet = "(min-width: 768px)";
    const mqlTablet = window.matchMedia(mediaTablet);
    mqlTablet.addEventListener("change", onMediaTablet);
    onMediaTablet(mqlTablet);

    return () => {
      mqlTablet.removeEventListener("change", onMediaTablet);
    };
  }, [onMediaTablet]);

  /* useEffect - componentDidUpdate - menuOpen. */
  useEffect(() => {
    /* Prevent body scroll. */
    if (menuOpen) {
      bodyRef.current.style.height = "100vh";
      bodyRef.current.style.overflow = "hidden";
    } else {
      bodyRef.current.removeAttribute("style");
    }
  }, [menuOpen]);

  return (
    <header
      className={classNames(compStyles.header, {
        [compStyles.header___minor]: headerMinor,
      })}
    >
      <Link className={compStyles.header__logo} to={home}>
        <StaticImage
          alt={"JXTX"}
          className={compStyles.header__logo__img}
          placeholder={"NONE"}
          src={jxtx}
        />
        <span className={compStyles.header__logo__title}>JXTX Foundation</span>
      </Link>
      <nav
        className={classNames(compStyles.header__nav, {
          [compStyles.header__nav___open]: menuOpen,
        })}
      >
        <ul className={compStyles.header__nav__list}>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              to={about}
            >
              Vision &amp; Values
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              to={james}
            >
              James
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              to={scholarships}
            >
              Scholarships
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              to={news}
            >
              News
            </Link>
          </li>
          <li className={compStyles.header__nav__item___cta}>
            <a
              className={compStyles.header__nav__link}
              href={donate}
            >
              Donate
            </a>
          </li>
        </ul>
      </nav>
      <div className={compStyles.header__cta}>
        <ButtonCTA
          attributeHREF={donate}
          buttonTheme={ButtonTheme.PRIMARY}
          buttonType={ButtonType.UNELEVATED}
        >
          Donate
        </ButtonCTA>
      </div>
      <div className={compStyles.header__menu}>
        <Button
          buttonAction={() => setMenuOpen((menuOpen) => !menuOpen)}
          buttonType={ButtonType.BURGER}
        >
          <img src={burger} alt={"Burger"} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
