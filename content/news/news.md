---
description: "Check out the latest news and stories about our work."
slug: "/news"
title: "Newsroom"
---

export const anoushkaImg = "newsroom-hero-anoushka.png"
export const anoushkaURL = "/news/2020-11-jxtx-joglekar"
export const awardeesImg = "newsroom-shoes.png"
export const awardeesURL = "/news/2020-10-jxtx-awardees"
export const davidURL = "/news/2020-11-jxtx-twesigomwe"
export const sumairaImg = "newsroom-sumaira.png"
export const sumairaURL = "/news/2020-11-jxtx-zaman"

<Headline>
<HeadlineHeading>Newsroom</HeadlineHeading>
</Headline>

<Newsroom>

<Grid>

<Tile orientation={"HORIZONTAL"} scale={"MEDIUM"} tileLink={anoushkaURL}>
<TileThumbnail imageDescription={"Anoushka"} imageName={anoushkaImg} imageScale={1.5}></TileThumbnail>
<TileContent>
<TileHeading>
Anoushka Joglekar: Making Connections via the JXTX Foundation
</TileHeading>
<TileBody>
Connected us to some incredible scientists who ... are passionate about mentoring students and eager to see us succeed.
</TileBody>
<TileDate>November 24, 2020</TileDate>
</TileContent>
</Tile>

</Grid>

<Grid columns={3}>

<Tile tileLink={sumairaURL}>
<TileThumbnail imageDescription={"Sumaira"} imageName={sumairaImg}></TileThumbnail>
<TileContent>
<TileHeading>
Sumaira Zaman: JXTX Foundation and Unique Opportunities
</TileHeading>
<TileBody>
Discussing my research confidently with experts in the field.
</TileBody>
<TileDate>November 25, 2020</TileDate>
</TileContent>
</Tile>

<Tile tileLink={davidURL}>
<TileThumbnail imageDescription={"David"}></TileThumbnail>
<TileContent>
<TileHeading>
David Twesigomwe on the impact of the JXTX Foundation
</TileHeading>
<TileBody>
David Twesigomwe, a scholarship awardee and a PhD candidate in Human Genetics at the Sydney Brenner Institute for Molecular Bioscience at the University of the Witwatersrand, Johannesburg benefited greatly from his participation.
</TileBody>
<TileDate>November 20, 2020</TileDate>
</TileContent>
</Tile>

<Tile tileLink={awardeesURL}>
<TileThumbnail imageDescription={"Awardees"} imageName={awardeesImg}></TileThumbnail>
<TileContent>
<TileHeading>
JXTX Foundation Awards First Ten Scholarships
</TileHeading>
<TileBody>
JXTX: The James P. Taylor Foundation for Open Science is pleased to announce the recipients of the 2020 JTech Scholarships. The JXTX Foundation provides support for students to attend conferences in computational biology and data science, where they can present their work and form connections with other researchers in the field.
</TileBody>
<TileDate>October 23, 2020</TileDate>
</TileContent>
</Tile>

</Grid>

</Newsroom>
