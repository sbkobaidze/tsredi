/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { languages, defaultLanguage } = require("./language")

module.exports = {
  siteMetadata: {
    title: `Tsredi - Multidisciplinary Digital Agency From Georgia `,
    description:
      "Looking to improve your online presence? Tsredi's digital marketing services have got you covered! We specialize in Search Engine Marketing, Social Media Marketing, UI/UX design, Blockchain Development, Game Development, App Development, Web Development, and Email Marketing. Partner with us to drive traffic, increase conversions, and achieve your business goals. Transform your online presence with Tsredi's comprehensive digital marketing services. Contact us today!",
    siteUrl: `https://tsredi.com/`,
    author: "Saba Kobaidze",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        i18nextOptions: {
          // debug: true,

          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
  ],
}
