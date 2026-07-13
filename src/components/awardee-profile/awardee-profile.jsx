import React from "react";
import CompatImage from "../compat-image/compat-image";
import * as compStyles from "./awardee-profile.module.css";

function AwardeeProfile(props) {
  const { children, conference, institution, name, photo, program, year } = props;

  return (
    <div className={compStyles.awardeeProfile}>
      <div className={compStyles.awardeeHeader}>
        <div className={compStyles.awardeeImageContainer}>
          {photo && (
            <CompatImage image={photo} alt={name} className={compStyles.awardeeImage} />
          )}
        </div>
        <div className={compStyles.awardeeInfo}>
          <h1 className={compStyles.awardeeName}>{name}</h1>
          <p className={compStyles.awardeeInstitution}>{institution}</p>
          <div className={compStyles.awardeeMeta}>
            <span className={compStyles.awardeeConference}>
              {conference} {year}
            </span>
            {program && <span className={compStyles.awardeeProgram}>{program}</span>}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default AwardeeProfile;
