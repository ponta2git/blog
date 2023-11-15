import React from "react";
import PostTag from "./PostTag";
import { Tag } from "../../types";

type PostTagListProps = {
  tags: Tag[];
};

const PostTagList: React.FC<PostTagListProps> = ({ tags }) => (
  <ul className="flex flex-row justify-start gap-x-2">
    {tags.map((t, i) => (
      <PostTag tag={t} key={i} />
    ))}
  </ul>
);

export default PostTagList;
