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
import FigureImage from "../figure-image/figure-image";
import Grid from "../grid/grid";
import Headline from "../headline/headline";
import HeadlineHeading from "../headline-heading/headline-heading";
import Newsroom from "../newsroom/newsroom";
import NewsroomDate from "../newsroom-date/newsroom-date";
import Tile from "../tile/tile";
import TileBody from "../tile-body/tile-body";
import TileContent from "../tile-content/tile-content";
import TileDate from "../tile-date/tile-date";
import TileHeading from "../tile-heading/tile-heading";
import TileThumbnail from "../tile-tumbnail/tile-thumbnail";

// Template variables
const shortcodes = {
    FigureImage,
    Grid,
    Headline,
    HeadlineHeading,
    Newsroom,
    NewsroomDate,
    Tile,
    TileBody,
    TileContent,
    TileDate,
    TileHeading,
    TileThumbnail,
};

function Mdx(props) {

    const {content, frontmatter, typography} = props;
    const {images, links} = frontmatter || {};
    Object.assign(shortcodes, typography); /* Merges article typography. */

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
