/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX document metadata component.
 */

// Core dependencies
import React from "react";
import Helmet from "react-helmet";

// App dependencies
import { SeoStaticQuery } from "../../hooks/seo-query";

function DocumentMetadata(props) {
  const { frontmatter, slug } = props || {},
    { description, image, title } = frontmatter || {},
    { childImageSharp } = image || {},
    { resize } = childImageSharp || {},
    { src } = resize || {};
  const { siteMetadata } = SeoStaticQuery(),
    {
      description: siteDescription,
      image: siteImage,
      title: siteTitle,
      twitterUsername,
      url: siteURL,
    } = siteMetadata || {};
  const seoImg = `${siteURL}${src || siteImage}`;
  const seoURL = slug ? `${siteURL}${slug}` : siteURL;
  const seo = {
    description: description || siteDescription,
    image: seoImg,
    title: title || siteTitle,
    twitterUsername: twitterUsername,
    url: seoURL,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang="en" />
      {/*<meta name="robots" content="noindex" />*/}
      <meta name="description" content={seo.description} key="description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={seo.title} key="og:title" />
      <meta
        property="og:description"
        content={seo.description}
        key="og:description"
      />
      <meta property="og:url" content={seo.url} key="og:url" />
      <meta
        property="og:site_name"
        content={"JXTX Foundation"}
        key="og:site_name"
      />
      {seo.image && (
        <meta property="og:image" content={seo.image} key="og:image" />
      )}
      <meta property="og:image:width" content="1000" key="og:image:width" />
      <meta property="og:image:height" content="500" key="og:image:height" />
      <meta
        name="twitter:card"
        content={"summary_large_image"}
        key="twitter:card"
      />
      <meta name="twitter:title" content={seo.title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={seo.description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={seo.image} key="twitter:image" />
      <meta
        name="twitter:site"
        content={seo.twitterUsername}
        key="twitter:site"
      />
      {seo.image && <meta name="image" content={seo.image} key="image" />}
    </Helmet>
  );
}

export default DocumentMetadata;
