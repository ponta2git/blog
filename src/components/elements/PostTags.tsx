import React from "react";

import { ArticleTagsType } from "../../node-types";
import PostTag from "./PostTag";

const PostTags: React.FC<ArticleTagsType> = ({ tags }) => (
  <ul className="flex flex-row justify-start gap-x-2">
    {tags.map((t, i) => (
      <PostTag content={t} key={i} />
    ))}
  </ul>
);

export default PostTags;
