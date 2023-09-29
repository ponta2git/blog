import React from "react";

import PostTag from "./elements/PostTag";
import { PostTagsType } from "../node-types";

const TagList: React.FC<PostTagsType> = ({ edges }) => (
  <div>
    <ul className="flex flex-row flex-wrap gap-x-2 gap-y-2">
      { edges.map((t, i) => (
        <PostTag content={t.fieldValue} key={i} />
      ))}
    </ul>
  </div>
);
export default TagList;
