import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'gatsby'
import tw, { css } from 'twin.macro'

const styleTitle = tw`
    font-bold
    mb-2
`

const styleList = tw`
    flex
    flex-row
    flex-wrap
    gap-x-2
    gap-y-2
`

const styleItem = [tw`
    p-1
    bg-gray-200
    text-gray-500
    rounded-md
    text-xs
    whitespace-nowrap
    shadow-inner
`, css`
    word-break: keep-all;
`
]

const TagList = ({ tags }) => (
    <div>
        <h3 css={styleTitle}><FontAwesomeIcon icon={faTags} />&nbsp;タグ一覧</h3>
        <ul css={styleList}>
            {tags.map((t,i) =>
                <Link key={i} to={`/tags/${t.fieldValue}`}>
                    <li css={styleItem}>{t.fieldValue}({t.totalCount})</li>
                </Link>
            )}
        </ul>
    </div>
)
export default TagList