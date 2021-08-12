import React from "react"
import { Article } from "./article"

export const FullPost = ({ name, date, tags, title, body, next, previous }) => {
    return <Article
            name={name}
            date={date}
            title={title}
            tags={tags}
            body={body}
            next={next}
            previous={previous}
            isExcerpt={false}
        />
}
