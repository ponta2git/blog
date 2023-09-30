import React from "react";
import { ArticleTags, TagNodeContext } from "../node-types";
import { PageProps, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";
import Contents from "../components/elements/Contents";
import Excerpts from "../components/elements/Excerpts";

const TagPage = ({
  data,
  pageContext,
}: PageProps<Queries.TagPageQuery, TagNodeContext>) => {
  const { edges } = data.allMdx;
  const { tag } = pageContext;
  return (
    <Layout pageTitle={`タグ：${tag}`}>
      <Contents>
        <p>
          <FontAwesomeIcon icon={faTag} /> {tag}
        </p>
        {edges &&
          edges.map((edge, idx) => {
            const { frontmatter, excerpt, parent } = edge.node;
            if (!frontmatter || !parent) return null;

            return (
              <Excerpts
                key={idx}
                title={frontmatter?.title ?? ""}
                date={frontmatter?.date ?? ""}
                tags={(frontmatter?.tags as ArticleTags) ?? []}
                excerpt={excerpt ?? ""}
                addr={(parent as { name: string }).name}
              />
            );
          })}
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
          id
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            tags
            title
          }
          excerpt(pruneLength: 50)
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
