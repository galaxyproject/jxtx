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
  const { name, institution, photo, conference, year, slug, program } = awardee;
  const image = getImage(photo);

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
            <p className={compStyles.awardeeCard__institution}>{institution}</p>
            <div className={compStyles.awardeeCard__meta}>
              <span className={compStyles.awardeeCard__conference}>
                {conference} {year}
              </span>
              {program && (
                <span className={compStyles.awardeeCard__program}>{program}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AwardeeCard;