/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee gallery component.
 */

// Core dependencies
import React from "react";

// App dependencies
import AwardeeCard from "../awardee-card/awardee-card";

// Styles
import * as compStyles from "./awardee-gallery.module.css";

function AwardeeGallery({ awardees }) {
  return (
    <div className={compStyles.awardeeGallery}>
      {/* Gallery Grid */}
      <div className={compStyles.grid}>
        {awardees.map((awardee) => (
          <AwardeeCard key={awardee.slug} awardee={awardee} />
        ))}
      </div>
    </div>
  );
}

export default AwardeeGallery;
