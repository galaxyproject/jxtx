// Port of gatsby-node.js routing. The glob loader already replicated slug semantics: entry.id
// is the frontmatter slug verbatim when present (leading "/"), else the file path without
// extension. Gatsby's createFilePath produced trailing-slash paths for the latter.
export function routeForEntry(entry) {
  return entry.id.startsWith("/") ? entry.id : `/${entry.id}/`;
}

export function paramForEntry(entry) {
  return routeForEntry(entry).replace(/^\/+|\/+$/g, "");
}

export function isAwardeeProfile(entry) {
  const route = routeForEntry(entry);
  return (
    route.startsWith("/awardees/") &&
    route !== "/awardees-content/" &&
    Boolean(entry.data.name && entry.data.institution)
  );
}
