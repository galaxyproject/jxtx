/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX section newsroom component.
 */

// Core dependencies
import React from "react";

// App dependencies
import {NewsroomStaticQuery} from "../../hooks/newsroom-query";
import Mdx from "../mdx/mdx";

function SectionNewsroom() {

    const post = NewsroomStaticQuery();
    const {body: content, frontmatter} = post || {};

    return (
        <Mdx content={content} frontmatter={frontmatter}/>
    )
}

export default SectionNewsroom;
