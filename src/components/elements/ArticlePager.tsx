import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Neighbor } from "../../types";

type ArticlePagerContent = {
  previous?: Neighbor;
  next?: Neighbor;
};

const ArticlePager: React.FC<ArticlePagerContent> = ({ next, previous }) => (
  <div className="mt-12 flex flex-row gap-x-2 w-full justify-between">
    <div className="flex flex-row w-1/3">
      <p className="w-[20px]">
        {previous && <FontAwesomeIcon icon={faAngleLeft} />}
      </p>
      <p className="w-full pr-2">
        {previous && (
          <Link
            to={`/blog/${previous.fileName}`}
            className="text-red-800 hover:text-red-700 duration-200 ease-in-out transition-colors"
          >
            {previous.title}
          </Link>
        )}
      </p>
    </div>
    <div className="flex flex-row w-1/3">
      <p className="w-full text-right pl-2">
        {next && (
          <Link
            to={`/blog/${next.fileName}`}
            className="text-red-800 hover:text-red-700 duration-200 ease-in-out transition-colors"
          >
            {next.title}
          </Link>
        )}
      </p>
      <p className="w-[20px] text-right">
        {next && <FontAwesomeIcon icon={faAngleRight} />}
      </p>
    </div>
  </div>
);

export default ArticlePager;
