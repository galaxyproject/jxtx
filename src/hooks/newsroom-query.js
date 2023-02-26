import { useStaticQuery, graphql } from "gatsby";

export const NewsroomStaticQuery = () => {
  const { mdx } = useStaticQuery(
    graphql`
      query NewsroomStaticQuery {
        mdx(fields: { slug: { eq: "/news" } }) {
          body
          frontmatter {
            description
            fullWidth
            images {
              childImageSharp {
                gatsbyImageData
              }
            }
            links
            title
          }
          fields {
            slug
          }
        }
      }
    `
  );
  return mdx;
};
