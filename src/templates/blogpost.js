import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { FullPost } from "../components/fullpost"

const BlogPost = ({data, pageContext}) => {
    const { frontmatter, body } = data.mdx
    const { next, previous } = pageContext

    return <Layout pageTitle={frontmatter.title}>
        <FullPost
            name={frontmatter.name}
            date={frontmatter.date}
            title={frontmatter.title}
            tags={frontmatter.tags}
            body={body}
            next={next}
            previous={previous}
        />
    </Layout>
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date(formatString: "YYYY/MM/DD")
                tags
                title
            }
            body
        }
    }
`

export default BlogPost