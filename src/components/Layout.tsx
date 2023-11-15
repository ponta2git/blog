import React, { PropsWithChildren } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { TagStatisticsFactory } from "../factories/TagStatisticsFactory";
import { SiteMetadataFactory } from "../factories/SiteMetadataFactory";

import Header from "./Header";
import Contents from "./elements/Contents";
import Footer from "./Footer";
import PostTag from "./elements/PostTag";

type LayoutProps = {
  pageTitle?: string;
};

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle,
}) => {
  const data = useStaticQuery<Queries.LayoutQuery>(graphql`
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
  const { title } = SiteMetadataFactory.create(data);
  const tagStats = data.allMdx.group
    .map((edge) => TagStatisticsFactory.create(edge))
    .sort((a, b) => b.totalCount - a.totalCount);

  return (
    <div className="relative min-h-screen pb-24">
      <title>
        {pageTitle ? `${pageTitle} | ` : null}
        {title}
      </title>

      <Header siteName={title} />

      <div className="bg-gray-100 pt-3 pb-10 border-t-[1px] border-t-gray-100 border-solid">
        <div className="md:w-4/5 lg:w-11/12 xl:w-8/12 mx-auto my-6">
          <div className="mx-5 lg:mx-10 lg:flex lg:flex-row-reverse lg:justify-between">
            <aside className="mb-8 lg:mb-0 lg:w-1/4">
              <Contents>
                <ul className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                  {tagStats.map((stat, idx) => (
                    <PostTag tag={stat.fieldValue} key={idx} />
                  ))}
                </ul>
              </Contents>
            </aside>

            <main className="lg:w-2/3">{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
