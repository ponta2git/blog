module.exports = {
  siteMetadata: {
    siteUrl: "https://nponta.info",
    title: "Life in the Fast Lane",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
        resolve: "gatsby-plugin-google-gtag",
        options: {
          trackingIds: [
            "UA-70663571-2"
          ]
        }
    },
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-emotion"
  ],
};
