import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

export const TagList = ({ tags }) => {
    return <div className="aside">
        <h3 className="font-bold mb-4"><FontAwesomeIcon icon={faTags} />&nbsp;タグ一覧</h3>
        <ul className="flex flex-row gap-x-2 mb-6">
            {tags.map(t => 
                <Link key={`tag_${t.fieldValue}`} to={`/tags/${t.fieldValue}`}>
                    <li className="text-xs p-1 rounded bg-gray-200">
                    {t.fieldValue}({t.totalCount})
                    </li>
                </Link>
            )}
        </ul>
    </div>
}