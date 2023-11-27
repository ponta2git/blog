import React from "react";
import { TagNodeContext } from "../types/nodes";
import { PageProps, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Contents from "../components/elements/Contents";
import Excerpts from "../components/elements/Excerpts";
import { ArticleMetadataFactory } from "../factories/ArticleMetadataFactory";

const TagPage: React.FC<PageProps<Queries.TagPageQuery, TagNodeContext>> = ({
  data,
  pageContext,
}) => {
  const { tag } = pageContext;
  const metas = data.allMdx.edges.map((edge) =>
    ArticleMetadataFactory.create(edge.node),
  );

  return (
    <Layout pageTitle={`タグ：${tag}`}>
      <Contents>
        <p>
          <FontAwesomeIcon icon={faTag} /> {tag}
        </p>
        {metas.map((meta, idx) => (
          <Excerpts key={idx} metadata={meta} />
        ))}
      </Contents>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            tags
            title
          }
          excerpt(pruneLength: 100)
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;

export default TagPage;
