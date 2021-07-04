/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX headline component.
 */

// Core dependencies
import React from "react";

// App dependencies
import Section from "../section/section";
import { SectionType } from "../section/section-type.model";

function Headline(props) {
  const { children } = props;

  return <Section type={SectionType.HEADLINE}>{children}</Section>;
}

export default Headline;
