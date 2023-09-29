import React from "react";
import { Link } from "gatsby";

type TagContent = {
  content: string;
};

const PostTag: React.FC<TagContent> = ({ content }) => {
  return (
    <Link to={`/tags/${content}`}>
      <li className="inline py-1 px-2 border-[1px] bg-gray-50 border-gray-300 text-gray-600 rounded-2xl text-xs hover:bg-gray-200 duration-200 ease-in-out transition-colors whitespace-nowrap break-keep">
        {content}
      </li>
    </Link>
  );
};

export default PostTag;
