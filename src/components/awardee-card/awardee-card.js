/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee card component.
 */

// Core dependencies
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Styles
import * as compStyles from "./awardee-card.module.css";

function AwardeeCard({ awardee }) {
  const { name, photo, conference, year, slug } = awardee;
  const image = getImage(photo);

  // Create conference abbreviations
  const getConferenceAbbr = (conf) => {
    const abbreviations = {
      "Biology of Genomes": "BOG",
      "Biological Data Science": "BDS",
      "Galaxy Community Conference": "GCC",
      "Galaxy and Bioconductor Community Conference": "GBCC",
      "Genome Informatics": "GI",
    };
    return abbreviations[conf] || conf;
  };

  const conferenceInfo =
    conference && year
      ? `${getConferenceAbbr(conference)} ${year}`
      : conference || year || "";

  return (
    <div className={compStyles.awardeeCard}>
      <Link to={slug} className={compStyles.awardeeCard__link}>
        <div className={compStyles.awardeeCard__imageContainer}>
          {image && (
            <GatsbyImage
              image={image}
              alt={name}
              className={compStyles.awardeeCard__image}
            />
          )}
        </div>
        <div className={compStyles.awardeeCard__tooltip}>
          <div className={compStyles.awardeeCard__tooltipContent}>
            <h3 className={compStyles.awardeeCard__name}>{name}</h3>
            {conferenceInfo && (
              <p className={compStyles.awardeeCard__conference}>
                {conferenceInfo}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AwardeeCard;
