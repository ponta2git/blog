import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw, { GlobalStyles, css } from 'twin.macro'
import { Global } from "@emotion/react"
import Header from './header'
import Profile from './elements/profile'
import TagList from './elements/taglist'
import Contents from './elements/contents'
import Footer from './footer'

const styleWrapper = tw`
    relative
    min-h-screen
    pb-24
`

const styleContainer = tw`
    w-11/12
    md:w-4/5
    lg:w-11/12
    xl:w-8/12
    mx-auto
    my-6
    pb-6
    rounded
    bg-gray-50
    shadow-lg
`

const styleDivider = tw`
    mx-5
    lg:mx-10
    lg:flex
    lg:flex-row
    lg:justify-between
`

const styleMain = tw`
    lg:w-2/3
`

const styleAside = tw`
    mt-6
    lg:mt-0
    lg:w-1/4
`



const Layout = ({ children, pageTitle }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }  
    `)
    const { siteMetadata } = data.site
    const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount)

    return ( 
        <div css={styleWrapper}>
            <title>
                {pageTitle ? `${pageTitle} | ` : null }{siteMetadata.title}
            </title>
            <GlobalStyles />
            <Global styles={css`
                body {
                    ${tw`bg-gray-300 text-gray-700`}
                }  
            `} />
            <div css={styleContainer}>
                <Header siteName={siteMetadata.title} />
                <div css={styleDivider}>
                    <main css={styleMain}>
                        {children}
                    </main>
                    <aside css={styleAside}>
                        <Contents>
                            <TagList tags={tags} />
                            <Profile />
                        </Contents> 
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;