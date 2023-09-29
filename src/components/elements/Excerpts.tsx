import { Link } from "gatsby";
import React from "react";
import PostTags from "./PostTags";
import { ArticleTags } from "../../node-types";

type ExcerptContent = {
  title: string;
  date: string;
  tags: ArticleTags;
  excerpt: string;
  addr: string;
}

const Excerpts: React.FC<ExcerptContent> = ({ title, date, tags, excerpt, addr }) => (
    <article className="py-2 flex flex-col gap-y-1">
      <h2 className="text-2xl leading-tight tracking-tight font-bold text-red-800 hover:text-red-700 transition-colors ease-in-out duration-200">
        <Link to={`/blog/${addr}`}>{title}</Link>
      </h2>
      <p className="text-xs leading-tight text-gray-500">{date}</p>
      <PostTags tags={tags} />
      <p className="leading-7 tracking-wide">{excerpt}</p>
    </article>
  
);

export default Excerpts;
