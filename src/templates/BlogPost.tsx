import React, { HTMLProps } from "react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";

import Layout from "../components/Layout";
import CodeBlock from "../components/elements/CodeBlock";
import PostTags from "../components/elements/PostTags";
import ArticlePager from "../components/elements/ArticlePager";
import { ArticleTags, PageNodeContext } from "../node-types";
import Contents from "../components/elements/Contents";

// const styleArticle = tw`leading-7 flex flex-col gap-y-6 py-5 mt-2 border-t-2 border-b-2 border-double`;

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery, PageNodeContext>> = ({
  data,
  pageContext,
  children,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { frontmatter } = data.mdx as { frontmatter: any };
  const { date, tags, title } = frontmatter;
  const { next, previous } = pageContext;

  const components: MDXComponents = {
    code: (props: HTMLProps<HTMLElement>) => <CodeBlock {...props} />,
    dt: ({ className, ...props }: HTMLProps<HTMLElement>) => (
      <dt className={`font-bold ${className}`} {...props} />
    ),
    ul: ({ className, ...props }: HTMLProps<HTMLUListElement>) => (
      <ul className={`list-inside list-disc ${className}`} {...props} />
    ),
    h3: ({ className, ...props }: HTMLProps<HTMLHeadingElement>) => (
      <h3
        className={`font-bold border-gray-800 border-b-2 border-dotted py-[0.125rem] mt-4 first:mt-0 ${className}`}
        {...props}
      />
    ),
    a: ({ className, ...props }: HTMLProps<HTMLAnchorElement>) => (
      <a
        className={`text-red-700 hover:text-red-900 duration-200 transition-colors ease-in-out ${className}`}
        {...props}
      />
    ),
  };

  return (
    <Layout pageTitle={title}>
      <div className="flex flex-col gap-y-1 pb-4">
        <h2 className="text-2xl leading-tight tracking-tight font-bold text-red-800">
          {title}
        </h2>
        <p className="text-xs leading-tight text-gray-500">{date}</p>
        <PostTags tags={tags as ArticleTags} />
      </div>

      <Contents>
        <article className="leading-7 tracking-wide flex flex-col gap-y-4">
          <MDXProvider components={components}>{children}</MDXProvider>
        </article>
      </Contents>

      <ArticlePager next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
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
`;

export default BlogPost;
