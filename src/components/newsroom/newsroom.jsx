/*
 * JXTX Foundation
 * https://www.jxtxfoundation.org
 *
 * JXTX newsroom component.
 */

// Core dependencies
import React from "react";

// App dependencies
import Section from "../section/section";
import { SectionType } from "../section/section-type.model";

function Newsroom(props) {
  const { children } = props;

  return <Section type={SectionType.COLLECTION}>{children}</Section>;
}

export default Newsroom;
