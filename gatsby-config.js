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
    `@gatsby-cloud-pkg/gatsby-plugin-preview`,
    `gatsby-plugin-vanilla-extract`,
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
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_PREVIEWS,
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
