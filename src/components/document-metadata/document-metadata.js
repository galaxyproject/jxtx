/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX document metadata component.
 */

// Core dependencies
import { useLocation } from "@reach/router";
import React from "react";
import Helmet from "react-helmet";

// App dependencies
import { SeoStaticQuery } from "../../hooks/seo-query";

function DocumentMetadata(props) {
  const { frontmatter } = props || {},
    { description, image, title } = frontmatter || {},
    { childImageSharp } = image || {},
    { resize } = childImageSharp || {},
    { src } = resize || {};
  const { origin, href } = useLocation();
  const { siteMetadata } = SeoStaticQuery(),
    {
      description: siteDescription,
      image: siteImage,
      title: siteTitle,
      twitterUsername,
    } = siteMetadata || {};
  const seo = {
    description: description || siteDescription,
    image: `${origin}${src || siteImage}`,
    title: title || siteTitle,
    twitterUsername: twitterUsername,
    url: href,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang="en" />
      {/*<meta name="robots" content="noindex" />*/}
      <meta content={seo.description} key="description" name="description" />
      {seo.image && <meta content={seo.image} key="image" name="image" />}
      <meta content={seo.url} key="og:url" property="og:url" />
      <meta
        content={"JXTX Foundation"}
        key="og:site_name"
        property="og:site_name"
      />
      <meta content="website" key="og:type" property="og:type" />
      <meta content={seo.title} key="og:title" property="og:title" />
      <meta
        content={seo.description}
        key="og:description"
        property="og:description"
      />
      {seo.image && (
        <meta content={seo.image} key="og:image" property="og:image" />
      )}
      <meta
        content={"summary_large_image"}
        key="twitter:card"
        name="twitter:card"
      />
      <meta
        content={seo.twitterUsername}
        key="twitter:site"
        name="twitter:site"
      />
      <meta content={seo.title} key="twitter:title" name="twitter:title" />
      <meta
        content={seo.description}
        key="twitter:description"
        name="twitter:description"
      />
      <meta content={seo.image} key="twitter:image" name="twitter:image" />
    </Helmet>
  );
}

export default DocumentMetadata;
