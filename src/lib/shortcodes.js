// Port of src/components/mdx/mdx.js (shortcode registry) and the per-article element
// overrides from src/components/article-content/article-content.js.
import Awardee from "../components/awardee/awardee";
import AwardeeContent from "../components/awardee-content/awardee-content";
import Awardees from "../components/awardees/awardees";
import ButtonCta from "../components/button-cta/button-cta";
import ButtonSocial from "../components/button-social/button-social";
import Date from "../components/publish-date/publish-date";
import Grid from "../components/grid/grid";
import GridArticle from "../components/grid-article/grid-article";
import GridDuo from "../components/grid-duo/grid-duo";
import GridItemArticle from "../components/grid-item-article/grid-item-article";
import GridTres from "../components/grid-tres/grid-tres";
import GridUnus from "../components/grid-unus/grid-unus";
import Headline from "../components/headline/headline";
import HeadlineHeading from "../components/headline-heading/headline-heading";
import Image from "../components/image/image";
import Newsroom from "../components/newsroom/newsroom";
import Tile from "../components/tile/tile";
import TileBody from "../components/tile-body/tile-body";
import TileContent from "../components/tile-content/tile-content";
import TileDate from "../components/tile-date/tile-date";
import TileHeading from "../components/tile-heading/tile-heading";
import TileThumbnail from "../components/tile-tumbnail/tile-thumbnail";
import ArticleA from "../components/article-elements/article-a";
import ArticleBlockquote from "../components/article-elements/article-blockquote";
import ArticleFigcaption from "../components/article-elements/article-figcaption";
import ArticleH1 from "../components/article-typographies/article-h1";

export const shortcodes = {
  Awardee, AwardeeContent, Awardees, ButtonCta, ButtonSocial, Date, Grid, GridArticle,
  GridDuo, GridItemArticle, GridTres, GridUnus, Headline, HeadlineHeading, Image, Newsroom,
  Tile, TileBody, TileContent, TileDate, TileHeading, TileThumbnail,
};

export const articleShortcodes = {
  a: ArticleA,
  blockquote: ArticleBlockquote,
  figcaption: ArticleFigcaption,
  h1: ArticleH1,
};
