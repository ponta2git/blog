import React, { HTMLProps } from "react";
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";

import { PageNodeContext } from "../node-types";

import Layout from "../components/Layout";
import CodeBlock from "../components/elements/CodeBlock";
import PostTagList from "../components/elements/PostTagList";
import ArticlePager from "../components/elements/ArticlePager";
import Contents from "../components/elements/Contents";
import { NeighborFactory } from "../factories/NeighborFactory";
import { ArticleMetadataFactory } from "../factories/ArticleMetadataFactory";

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery, PageNodeContext>> = ({
  data,
  pageContext,
  children,
}) => {
  if (!data.mdx) throw new Error("GraphQL in BlogPost is not correct.");
  const { frontmatter } = ArticleMetadataFactory.create(data.mdx);
  const { date, tags, title } = frontmatter;

  const { next: contextNext, previous: contextPrev } = pageContext;
  const next = NeighborFactory.create(contextNext);
  const previous = NeighborFactory.create(contextPrev);

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
    img: ({ className, src, alt }: HTMLProps<HTMLImageElement>) => (
      <StaticImage
        imgClassName={`rounded-sm ${className}`}
        src={src ?? ""}
        alt={alt ?? ""}
        loading="lazy"
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
        <PostTagList tags={tags} />
      </div>

      <Contents>
        <article className="mt-2 text-base leading-7 tracking-normal flex flex-col gap-y-4">
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
