/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX mdx component.
 */

// Core dependencies
import { MDXProvider } from "@mdx-js/react";
import React from "react";

// App dependencies
import Awardee from "../awardee/awardee";
import AwardeeContent from "../awardee-content/awardee-content";
import Awardees from "../awardees/awardees";
import ButtonCta from "../button-cta/button-cta";
import ButtonSocial from "../button-social/button-social";
import Date from "../publish-date/publish-date";
import Grid from "../grid/grid";
import GridArticle from "../grid-article/grid-article";
import GridDuo from "../grid-duo/grid-duo";
import GridItemArticle from "../grid-item-article/grid-item-article";
import GridTres from "../grid-tres/grid-tres";
import GridUnus from "../grid-unus/grid-unus";
import Headline from "../headline/headline";
import HeadlineHeading from "../headline-heading/headline-heading";
import Image from "../image/image";
import Newsroom from "../newsroom/newsroom";
import Tile from "../tile/tile";
import TileContent from "../tile-content/tile-content";
import TileBody from "../tile-body/tile-body";
import TileDate from "../tile-date/tile-date";
import TileHeading from "../tile-heading/tile-heading";
import TileThumbnail from "../tile-tumbnail/tile-thumbnail";

// Template variables
const shortcodes = {
  Awardee,
  AwardeeContent,
  Awardees,
  ButtonCta,
  ButtonSocial,
  Date,
  Grid,
  GridArticle,
  GridDuo,
  GridItemArticle,
  GridTres,
  GridUnus,
  Headline,
  HeadlineHeading,
  Image,
  Newsroom,
  Tile,
  TileBody,
  TileContent,
  TileDate,
  TileHeading,
  TileThumbnail,
};

function Mdx(props) {
  const { articleShortcodes, children, frontmatter } = props;
  const { images, links } = frontmatter || {};
  Object.assign(shortcodes, articleShortcodes); /* Merges article shortcodes. */

  return (
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
  );
}

export default Mdx;
