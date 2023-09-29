import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Contents from "../components/elements/Contents";
import Excerpts from "../components/elements/Excerpts";
import { ArticleTags } from "../node-types";

const IndexPage = () => {
  const data = useStaticQuery<Queries.IndexPageQuery>(graphql`
    query IndexPage{
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            excerpt(pruneLength: 80)
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

  const { edges } = data.allMdx;

  console.log(edges[0].node.frontmatter?.tags)

  return (
    <Layout>
      <Contents>
        {edges.map((edge, idx) => (
          <Excerpts
            key={idx}
            title={edge.node.frontmatter?.title ?? ""}
            date={edge.node.frontmatter?.date ?? ""}
            tags={edge.node.frontmatter?.tags as ArticleTags ?? []}
            excerpt={edge.node.excerpt ?? ""}
            addr={(edge.node.parent as {name: string}).name}
          />
      ))}
      </Contents>
    </Layout>
  );
};

export default IndexPage;
