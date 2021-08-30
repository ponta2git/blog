import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Excerpt from "../components/elements/excerpt"
import Contents from "../components/elements/contents"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        excerpt(truncate: true, pruneLength: 80)
                        frontmatter {
                            date(formatString: "YYYY/MM/DD")
                            tags
                            title
                        }
                        parent {
                            ... on File {
                              name
                            }
                        }
                    }
                }
            }
        }
    `)

    const { edges } = data.allMdx

    return <Layout>
        <Contents>
            {edges.map((edge, idx) => <Excerpt 
                key={idx}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                tags={edge.node.frontmatter.tags}
                excerpt={edge.node.excerpt}
                addr={edge.node.parent.name} />)}
        </Contents>    
    </Layout>
}

export default IndexPage
