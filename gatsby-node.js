/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    query {
      allPrismicHomepage {
        nodes {
          lang
          url
          id
        }
      }
      allPrismicBlogmain {
        nodes {
          url
          lang
          id
          uid
        }
      }
      allPrismicBlog {
        nodes {
          uid
          url
          lang
          data {
            blogimage {
              url
            }
            blogtitle {
              text
            }
            date
          }
        }
      }
    }
  `)

  queryData.data.allPrismicHomepage.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/homepage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicBlog.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, "src/templates/blogpage.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
  queryData.data.allPrismicBlogmain.nodes.forEach(page => {
    createPage({
      path: page.uid.replace("_", "/"),
      component: path.resolve(__dirname, "src/templates/blog.js"),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
