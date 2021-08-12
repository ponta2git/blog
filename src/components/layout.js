import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"
import { Aside } from "./aside"
import { Main } from "./main"
import { Profile } from "./aside/profile"
import { TagList } from "./aside/taglist"

export const Layout = ({ pageTitle, children }) => {
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

    const { title } = data.site.siteMetadata;
    const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

    return (
        <div className="container lg:w-4/5 xl:w-2/3 mx-auto box-content pb-16">
            <title>{!!pageTitle ? `${pageTitle} | ` : null}{title}</title>
            <Header title={title} />
            <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-center">
                <Main>{children}</Main>
                <Aside>
                    <TagList tags={tags} />
                    <Profile />
                    <p className="text-right px-4">(C) 2021 ponta.</p>
                </Aside>
            </div>
        </div>
    );
}