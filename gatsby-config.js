/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Tsredi - Multidisciplinary Digital Agency From Georgia `,
    description:
      "Looking to improve your online presence? Tsredi's digital marketing services have got you covered! We specialize in Search Engine Marketing, Social Media Marketing, UI/UX design, Blockchain Development, Game Development, App Development, Web Development, and Email Marketing. Partner with us to drive traffic, increase conversions, and achieve your business goals. Transform your online presence with Tsredi's comprehensive digital marketing services. Contact us today!",
    siteUrl: `https://tsredi.com/`,
    author: "Saba Kobaidze",
  },
  flags: {
    DEV_SSR: true,
  },

  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-gatsby-cloud`,
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/minilogo.svg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "tsredi",
        accessToken:
          "MC5aQUNONXhBQUFPLVZjWTRF.77-977-9XO-_vVPvv73vv73vv71a77-9QO-_vT1-dlZi77-9fhhtU--_ve-_vXjvv71W77-977-9Fu-_ve-_vQ",
        customTypesApiToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InRzcmVkaS04MTdjNGE3OC1iNjBhLTRmN2EtYjNkMy04OWQ1ZTkzOThlYjlfNCIsImRhdGUiOjE2Nzc3NTc5NjAsImRvbWFpbiI6InRzcmVkaSIsImlhdCI6MTY3Nzc1Nzk2MH0.g4Eq6fgTB52go6fVjJUwDWr8NJpBGBG3nY95iP0L-_Y",
        linkResolver: require("./src/utils/linkResolver").linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "tsredi",
        accessToken:
          "MC5aQlFRa0JBQUFDRUFZQ1NN.bRPvv73vv71277-9NO-_vSbvv71_77-9ODzvv71TeHkmWk3vv70bLCcR77-977-977-977-977-9OQ",
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        releaseId: process.env.PRISMIC_RELEASE_ID,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PLKNDKL",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
      },
    },
  ],
}
