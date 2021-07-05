import { useStaticQuery, graphql } from "gatsby";

export const SeoStaticQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query SeoStaticQuery {
        site {
          siteMetadata {
            description
            image
            title
            url
            twitterUsername
          }
        }
      }
    `
  );
  return site;
};
