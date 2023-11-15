import { Link } from "gatsby";
import React from "react";
import PostTagList from "./PostTagList";
import { ArticleMetadata } from "../../types";

type ExcerptProps = {
  metadata: ArticleMetadata;
};

const Excerpts: React.FC<ExcerptProps> = ({ metadata }) => (
  <article className="pb-4 flex flex-col gap-y-1">
    <h2 className="text-2xl leading-tight tracking-tight font-bold text-red-800 hover:text-red-700 transition-colors ease-in-out duration-200">
      <Link to={`/blog/${metadata.fileName}`}>
        {metadata.frontmatter.title}
      </Link>
    </h2>
    <p className="text-xs leading-tight text-gray-500">
      {metadata.frontmatter.date}
    </p>
    <PostTagList tags={metadata.frontmatter.tags} />
    <p className="text-base leading-7 tracking-normal">
      {metadata.excerpt ?? ""}
    </p>
  </article>
);

export default Excerpts;
