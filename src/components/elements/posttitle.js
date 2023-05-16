import React from 'react'
import tw from 'twin.macro'
import Tags from './tags'

const stylePostTitle = tw`
    leading-relaxed
    tracking-wide
`

const styleTitle = tw`
    text-lg
    leading-tight
    font-bold
`

const styleDate = tw`
    text-sm
    text-gray-500
`

const stylePostMeta = tw`
    flex
    flex-row
    justify-start
    gap-x-2
    leading-tight
    my-1
`

const PostTitle = ({ title, date, tags }) => (
    <div css={[stylePostTitle]}>
        <h2 css={styleTitle}>{title}</h2>
        <div css={stylePostMeta}>
            <p css={styleDate}>{date}</p>
            <Tags tags={tags} />
        </div>
    </div>
)

export default PostTitle;