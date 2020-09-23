module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My MDX Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: "https://www.linkedin.com/in/lukas-rahm-13570b139/",
    image: "/notoffice.jpg",
    /* twitterUsername:@none, */
    author: "Lukas Rahm",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
            },
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto-mono`,
          `muli\:400,400i,700,700i`,
        ],
        display: "swap",
      },
    },
  ],
}
