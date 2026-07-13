import React from "react";
import classNames from "classnames";

/* Drop-in for gatsby's <Link>: a plain anchor. activeClassName needs the current route, which
   the server knows -- callers that use it (the header) pass currentPath. */
function Link(props) {
  const { activeClassName, className, currentPath, partiallyActive, to, children, ...rest } = props;
  const normalize = (p) => (p && p.length > 1 ? p.replace(/\/$/, "") : p);
  const isActive =
    Boolean(activeClassName) &&
    currentPath != null &&
    (partiallyActive
      ? normalize(currentPath).startsWith(normalize(to))
      : normalize(currentPath) === normalize(to));

  return (
    <a className={classNames(className, isActive && activeClassName)} href={to} {...rest}>
      {children}
    </a>
  );
}

export default Link;
