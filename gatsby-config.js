module.exports = {
  siteMetadata: {
    title: `Nikta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ]
}