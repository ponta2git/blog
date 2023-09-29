import React, { PropsWithChildren } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./Header";
import Contents from "./elements/Contents";
import TagList from "./TagList";
import Footer from "./Footer";
import { Tag } from "../node-types";

type LayoutType = {
  pageTitle?: string
}

const Layout: React.FC<PropsWithChildren<LayoutType>> = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { siteMetadata } = data.site;
  const tagEdges = data.allMdx.group.sort((a: Tag, b: Tag) => b.totalCount - a.totalCount);

  return (
    <div className="relative min-h-screen pb-24">
      <title>
        {pageTitle ? `${pageTitle} | ` : null}
        {siteMetadata.title}
      </title>

      <Header siteName={siteMetadata.title} />

    <div className="bg-gray-100 pt-3 pb-10 border-t-[1px] border-t-gray-100 border-solid">
      <div className="md:w-4/5 lg:w-11/12 xl:w-8/12 mx-auto my-6">
        <div className="mx-5 lg:mx-10 lg:flex lg:flex-row-reverse lg:justify-between">
          <aside className="mb-8 lg:mb-0 lg:w-1/4">
            <Contents>
              <TagList edges={tagEdges} />
            </Contents>
          </aside>
          
          <main className="lg:w-2/3">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
