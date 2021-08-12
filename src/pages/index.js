import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Layout } from '../components/layout' 
import { Excerpt } from "../components/excerpt"

// markup
const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
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
    `)
    const { nodes } = data.allMdx;

    return <Layout>
        <div className="flex flex-col gap-y-6 mb-4">
            { nodes.map(node => <Excerpt key={node.id} data={node} />) }
        </div>
        
    </Layout>
}

export default IndexPage
