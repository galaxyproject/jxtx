import React from "react";
import classNames from "classnames";

function CompatImage(props) {
  const { alt, image, className, loading = "lazy" } = props;
  if (!image) return null;
  const { width, height, sizes, sources, fallback, backgroundColor } = image;
  const spacer = `data:image/svg+xml;charset=utf-8,%3Csvg height='${height}' width='${width}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`;

  return (
    <div
      data-gatsby-image-wrapper=""
      className={classNames(
        "gatsby-image-wrapper",
        "gatsby-image-wrapper-constrained",
        className
      )}
    >
      <div style={{ maxWidth: width, display: "block" }}>
        <img
          alt=""
          role="presentation"
          aria-hidden="true"
          src={spacer}
          style={{ maxWidth: "100%", display: "block", position: "static" }}
        />
      </div>
      {backgroundColor ? (
        <div
          aria-hidden="true"
          data-placeholder-image=""
          style={{ backgroundColor }}
        />
      ) : null}
      <picture>
        {sources.map((source) => (
          <source
            key={source.type}
            type={source.type}
            srcSet={source.srcSet}
            sizes={sizes}
          />
        ))}
        <img
          data-main-image=""
          sizes={sizes}
          decoding="async"
          loading={loading}
          src={fallback.src}
          srcSet={fallback.srcSet}
          alt={alt}
        />
      </picture>
    </div>
  );
}

export default CompatImage;
