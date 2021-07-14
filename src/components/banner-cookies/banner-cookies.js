/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX cookies banner component.
 */

// Core dependencies
import Link from "gatsby-link";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

// App dependencies
import Button from "../button/button";
import { ButtonType } from "../button/button-type.model";

// Styles
import * as compStyles from "./banner-cookies.module.css";

function BannerCookies() {
  const [showBanner, setShowBanner] = useState(false);

  /**
   * Sets cookie and closes banner.
   */
  const closeBanner = () => {
    /* Set cookie and hide banner. */
    Cookies.set("cookiesAccepted", true, { expires: new Date(2300, 1, 1) });
    setShowBanner(false);
  };

  /* useEffect - componentDidMount/componentWillUnmount. */
  useEffect(() => {
    /* Grab the cookie "cookiesAccepted". */
    const cookie = Cookies.get("cookiesAccepted");

    /* Show the banner if the cookie has not been accepted. */
    if (cookie === undefined) {
      setShowBanner(true);
    }

    /* Hide the banner if the cookie has been accepted. */
    if (Cookies.get("cookiesAccepted") === true) {
      setShowBanner(false);
    }
  }, []);

  return showBanner ? (
    <div className={compStyles.banner}>
      <p className={compStyles.banner__text}>
        This website uses cookies for security and analytics purposes. By using
        this site, you agree to these uses.{" "}
        <Link className={compStyles.banner__link} to={"/privacy"}>
          Learn more here.
        </Link>
      </p>
      <Button buttonAction={() => closeBanner()} buttonType={ButtonType.TEXT}>
        Ok
      </Button>
    </div>
  ) : null;
}

export default BannerCookies;
