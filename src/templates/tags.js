import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { Layout } from "../components/layout"
import { Excerpt } from "../components/excerpt"

const Tags = ({ data, pageContext }) => {
    const { edges } = data.allMdx
    const { tag } = pageContext

    return <Layout pageTitle={tag}>
        <p className="mb-6">一覧：<FontAwesomeIcon icon={faTag} />&nbsp;{tag}</p>
        {edges.map(e => <Excerpt key={e.node.id} data={e.node}/>)}       
    </Layout>
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