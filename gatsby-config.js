let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log('Using environment config: ${activeEnv}')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `stopswapgo.co.uk`,
    description: `Rethink your daily travel`,
    author: `Essex Service Design Team`,
    siteUrl: `https://stopswapgo.co.uk`
  },
  plugins: [
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`${100044516626032}`], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
        },
        key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
        version: '5.0', // The version of the graph API to use. Defaults to 5.0
      },
    },  
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GOV_DELIVERY_API_KEY"]
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
        // downloadLocal: true,
        // forceFullSync: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon2.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
