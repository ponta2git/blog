import type { GatsbyConfig } from "gatsby";
import remarkGfm from "remark-gfm";

const config: GatsbyConfig = {
  trailingSlash: "never",
  graphqlTypegen: {
    typesOutputPath: "src/types/gatsby.d.ts",
  },
  siteMetadata: {
    siteUrl: "https://nponta.info",
    title: "Life in the Fast Lane",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-MRXNQWXBKX"],
      },
    },
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://nponta.info",
      },
    },
  ],
};

export default config;
