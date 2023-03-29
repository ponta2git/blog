import { Link } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import PostTitle from './posttitle'

const style = tw`
    py-2
    hover:text-gray-500
    transition-colors
    ease-in-out
    duration-200
    flex
    flex-col
    gap-y-2
`

const Excerpt = ({ title, date, tags, excerpt, addr }) => (
    <Link to={`/blog/${addr}`}>
        <article css={style}>
            <PostTitle
                title={title}
                date={date}
                tags={tags} />
            <p>{excerpt}</p>
        </article>
    </Link>
)

export default Excerpt;