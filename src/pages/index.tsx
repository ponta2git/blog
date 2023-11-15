import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Contents from "../components/elements/Contents";
import Excerpts from "../components/elements/Excerpts";
import { ArticleMetadataFactory } from "../factories/ArticleMetadataFactory";

const IndexPage: React.FC = () => {
  const data = useStaticQuery<Queries.IndexPageQuery>(graphql`
    query IndexPage {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            excerpt(pruneLength: 100)
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              tags
              title
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `);

  const metas = data.allMdx.edges.map((edge) =>
    ArticleMetadataFactory.create(edge.node)
  );

  return (
    <Layout>
      <Contents>
        {metas.map((meta, idx) => (
          <Excerpts key={idx} metadata={meta} />
        ))}
      </Contents>
    </Layout>
  );
};

export default IndexPage;
