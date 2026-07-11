/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX header component.
 */

// Core dependencies
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "../link/link";
import CompatImage from "../compat-image/compat-image";

// App dependencies
import Button from "../button/button";
import { ButtonTheme } from "../button/button-theme.model";
import { ButtonType } from "../button/button-type.model";
import ButtonCTA from "../button-cta/button-cta";

// Images
import burger from "../../../images/header/burger.svg";

// Styles
import * as compStyles from "./header.module.css";
import classNames from "classnames";

// Template variables
const about = "/about";
const awardees = "/awardees";
const donate = "/donate";
const home = "/";
const james = "/james";
const jj = "/scholarships/jj-fund";
const news = "/news";
const scholarships = "/scholarships";

function Header(props) {
  const { headerMinor, logo, pathname } = props;
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
        <CompatImage
          alt={"JXTX"}
          className={compStyles.header__logo__img}
          image={logo}
          loading="eager"
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
              currentPath={pathname}
              to={about}
            >
              Vision &amp; Values
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              currentPath={pathname}
              to={james}
            >
              James
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              currentPath={pathname}
              to={jj}
            >
              JJ Fund
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              currentPath={pathname}
              to={scholarships}
            >
              Scholarships
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              currentPath={pathname}
              to={awardees}
            >
              Awardees
            </Link>
          </li>
          <li className={compStyles.header__nav__item}>
            <Link
              activeClassName={compStyles.header__nav__link___active}
              className={compStyles.header__nav__link}
              currentPath={pathname}
              to={news}
            >
              News
            </Link>
          </li>
          <li className={compStyles.header__nav__item___cta}>
            <a className={compStyles.header__nav__link} href={donate}>
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
          <img src={burger.src} alt={"Burger"} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
