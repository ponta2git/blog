import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import Contents from "../components/elements/contents"
import Excerpt from "../components/elements/excerpt"

const Tags = ({ data, pageContext }) => {
    const { edges } = data.allMdx
    const { tag } = pageContext

    return (
        <Layout>
            <Contents>
                <p><FontAwesomeIcon icon={faTag} /> {tag}</p>
                {edges.map((edge, idx) => <Excerpt 
                    key={idx}
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    tags={edge.node.frontmatter.tags}
                    excerpt={edge.node.excerpt}
                    addr={edge.node.parent.name} />)}
            </Contents>    
        </Layout>
    )
}

export const query = graphql`
    query ($tag: String) {
        allMdx(
            filter: {frontmatter: {tags: {in: [$tag]}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "YYYY/MM/DD")
                        tags
                        title
                    }
                    excerpt(truncate: true, pruneLength: 50)
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
    }
`

export default Tags