/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX gatsby-ssr file.
 */

// Core dependencies
import { MDXProvider } from "@mdx-js/react";
import React from "react";

// App dependencies - Custom components
import Awardee from "./src/components/awardee/awardee";
import AwardeeContent from "./src/components/awardee-content/awardee-content";
import Awardees from "./src/components/awardees/awardees";
import ButtonCta from "./src/components/button-cta/button-cta";
import ButtonSocial from "./src/components/button-social/button-social";
import Date from "./src/components/publish-date/publish-date";
import Grid from "./src/components/grid/grid";
import GridArticle from "./src/components/grid-article/grid-article";
import GridDuo from "./src/components/grid-duo/grid-duo";
import GridItemArticle from "./src/components/grid-item-article/grid-item-article";
import GridTres from "./src/components/grid-tres/grid-tres";
import GridUnus from "./src/components/grid-unus/grid-unus";
import Headline from "./src/components/headline/headline";
import HeadlineHeading from "./src/components/headline-heading/headline-heading";
import Image from "./src/components/image/image";
import Newsroom from "./src/components/newsroom/newsroom";
import Tile from "./src/components/tile/tile";
import TileContent from "./src/components/tile-content/tile-content";
import TileBody from "./src/components/tile-body/tile-body";
import TileDate from "./src/components/tile-date/tile-date";
import TileHeading from "./src/components/tile-heading/tile-heading";
import TileThumbnail from "./src/components/tile-tumbnail/tile-thumbnail";

// App dependencies - Article elements
import ArticleA from "./src/components/article-elements/article-a";
import ArticleBlockquote from "./src/components/article-elements/article-blockquote";
import ArticleFigcaption from "./src/components/article-elements/article-figcaption";
import ArticleH1 from "./src/components/article-typographies/article-h1";

const components = {
  // Custom components
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
  // Custom element components (workaround for Gatsby 5 + MDX v2 HTML element mapping issues)
  Figcaption: ArticleFigcaption,
  A: ArticleA, // Capital A for use in HTML tables
  // HTML element overrides
  a: ArticleA,
  blockquote: ArticleBlockquote,
  h1: ArticleH1,
};

export const wrapPageElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
