import React from "react"
import { graphql } from "gatsby"
import tw, {css} from "twin.macro"
import Layout from "../components/layout"
import PostTitle from "../components/elements/posttitle"
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from '../components/elements/codeblock'
import ArticlePager from "../components/elements/articlepager"

const styleArticle = [tw`
    leading-7
    flex
    flex-col
    gap-y-6
    py-5
    mt-2
    border-t-2
    border-b-2
    border-double

`, css({
    ul: tw`list-inside list-disc`,
    dt: tw`font-bold`,
    h3: tw`font-bold border-b-2 border-dotted py-1`,
    code: tw`text-sm`,
    a: tw`text-red-700 hover:text-red-900 duration-200 transition-colors ease-in-out`
})]

const BlogPost = ({data, pageContext}) => {
    const { frontmatter, body } = data.mdx
    const { date, tags, title } = frontmatter
    const { next, previous } = pageContext

    const components = {
        code: props => <CodeBlock {...props} />
    }

    return <Layout pageTitle={title}>
        <PostTitle
                title={title}
                date={date}
                tags={tags}
            />
        <article css={styleArticle}>
            <MDXProvider components={components}>
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </MDXProvider>
        </article>
        <ArticlePager next={next} previous={previous} />
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