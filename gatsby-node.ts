import type { GatsbyNode } from "gatsby";
import path from "path";
import type {
  PageNodeContext,
  TagNodeContext,
  PostEdge,
  TagEdge,
} from "./src/node-types";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = await graphql<PageNodeQuery>(ql);

  if (!data) return;

  const postTemplate = path.resolve("./src/templates/BlogPost.tsx");
  data.postsRemark.edges.forEach(({ node, next, previous }) => {
    actions.createPage<PageNodeContext>({
      path: `/blog/${node.parent.name}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        previous: {
          title: previous ? previous.frontmatter.title : undefined,
          name: previous ? previous.parent.name : undefined,
        },
        next: {
          title: next ? next.frontmatter.title : undefined,
          name: next ? next.parent.name : undefined,
        },
      },
    });
  });

  const tagsTemplate = path.resolve("./src/templates/TagPage.tsx");
  data.tagsGroup.group.forEach((tag) => {
    actions.createPage<TagNodeContext>({
      path: `/tags/${tag.fieldValue}`,
      component: `${tagsTemplate}`,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

type PageNodeQuery = {
  postsRemark: {
    edges: PostEdge[];
  };
  tagsGroup: {
    group: TagEdge[];
  };
};

const ql = `query PageNodeQuery {
  postsRemark: allMdx(sort: {frontmatter: {date: ASC}}) {
    edges {
      node {
        id
        parent {
          ... on File {
            name
          }
        }
        internal {
          contentFilePath
        }
      }
      next {
        frontmatter {
          title
        }
        parent {
          ... on File {
            name
          }
        }
      }
      previous {
        frontmatter {
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
  tagsGroup: allMdx {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
    }
  }
}`;
