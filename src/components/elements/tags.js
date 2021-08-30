import React from 'react'
import { Link } from 'gatsby'
import tw, { css } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

const styleTags = tw`
    flex
    flex-row
    justify-start
    text-sm
    text-gray-500
`
const styleIcon = tw`
    mr-1
`

const styleTagList = tw`
    flex
    flex-row
    justify-start
    gap-x-1
`

const styleTag = [tw`
    inline
    p-1
    bg-gray-200
    text-gray-500
    rounded-md
    text-xs
    shadow-inner
`,
css`
    word-break: keep-all
`]

const Tags = ({ tags }) => (
    <div css={styleTags}>
        <span css={styleIcon}><FontAwesomeIcon icon={faTags} /></span>
        <ul css={styleTagList}>
            {tags.map((t, i) => (
                <Link to={`/tags/${t}`} key={i}>
                    <li css={styleTag}>{t}</li>
                </Link>
            ))}
        </ul>        
    </div>
)

export default Tags