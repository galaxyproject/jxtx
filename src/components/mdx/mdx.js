/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX mdx component.
 */

// Core dependencies
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react";
import React from "react";

// App dependencies
import Date from "../publish-date/publish-date";
import Grid from "../grid/grid";
import GridItem from "../grid-item/grid-item";
import Headline from "../headline/headline";
import HeadlineHeading from "../headline-heading/headline-heading";
import Image from "../image/image";
import Newsroom from "../newsroom/newsroom";
import Tile from "../tile/tile";
import TileBody from "../tile-body/tile-body";
import TileContent from "../tile-content/tile-content";
import TileDate from "../tile-date/tile-date";
import TileHeading from "../tile-heading/tile-heading";
import TileThumbnail from "../tile-tumbnail/tile-thumbnail";

// Template variables
const shortcodes = {
    Date,
    Grid,
    GridItem,
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

    const {articleShortcodes, content, frontmatter} = props;
    const {images, links} = frontmatter || {};
    Object.assign(shortcodes, articleShortcodes); /* Merges article shortcodes. */

    return (
        <MDXProvider components={shortcodes}>
            <MDXRenderer
                frontmatter={frontmatter}
                images={images}
                links={links}>
                {content}
            </MDXRenderer>
        </MDXProvider>
    )
}

export default Mdx;
