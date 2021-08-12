import React from 'react'
import { Article } from "./article"

export const Excerpt = ({ data }) => {
    const { frontmatter, excerpt } = data;
    const { title, date, tags } = frontmatter;
    const { name } = data.parent
    return (
        <Article
            name={name}
            date={date}
            title={title}
            tags={tags}
            body={excerpt}
            isExcerpt={true}
        />
    )
}