import {useStaticQuery, graphql} from 'gatsby';

export const ImageStaticQuery = () => {
    const {allImageSharp} = useStaticQuery(
        graphql`
        query ImageStaticQuery {
          allImageSharp {
            edges {
              node {
                fluid {
                  originalName
                  src
                }
              }
            }
          }
        }
    `
    );
    return allImageSharp.edges.map(n => n.node);
};
