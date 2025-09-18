/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX awardee gallery component.
 */

// Core dependencies
import React, { useState, useMemo } from "react";

// App dependencies
import AwardeeCard from "../awardee-card/awardee-card";

// Styles
import * as compStyles from "./awardee-gallery.module.css";

function AwardeeGallery({ awardees }) {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedConference, setSelectedConference] = useState("all");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(awardees.map(a => a.year))].sort((a, b) => b - a);
    return uniqueYears;
  }, [awardees]);

  const conferences = useMemo(() => {
    const uniqueConferences = [...new Set(awardees.map(a => a.conference))].sort();
    return uniqueConferences;
  }, [awardees]);

  const filteredAwardees = useMemo(() => {
    return awardees.filter(awardee => {
      const yearMatch = selectedYear === "all" || awardee.year.toString() === selectedYear;
      const conferenceMatch = selectedConference === "all" || awardee.conference === selectedConference;
      return yearMatch && conferenceMatch;
    });
  }, [awardees, selectedYear, selectedConference]);

  return (
    <div className={compStyles.awardeeGallery}>
      {/* Filters */}
      <div className={compStyles.filters}>
        <div className={compStyles.filterGroup}>
          <label htmlFor="year-filter" className={compStyles.filterLabel}>
            Year:
          </label>
          <select
            id="year-filter"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className={compStyles.filterSelect}
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year.toString()}>{year}</option>
            ))}
          </select>
        </div>

        <div className={compStyles.filterGroup}>
          <label htmlFor="conference-filter" className={compStyles.filterLabel}>
            Conference:
          </label>
          <select
            id="conference-filter"
            value={selectedConference}
            onChange={(e) => setSelectedConference(e.target.value)}
            className={compStyles.filterSelect}
          >
            <option value="all">All Conferences</option>
            {conferences.map(conference => (
              <option key={conference} value={conference}>{conference}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className={compStyles.resultsCount}>
        Showing {filteredAwardees.length} of {awardees.length} awardees
      </div>

      {/* Gallery Grid */}
      <div className={compStyles.grid}>
        {filteredAwardees.map((awardee) => (
          <AwardeeCard key={awardee.slug} awardee={awardee} />
        ))}
      </div>

      {filteredAwardees.length === 0 && (
        <div className={compStyles.noResults}>
          <p>No awardees found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

export default AwardeeGallery;