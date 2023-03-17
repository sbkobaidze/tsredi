/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")
// const bodyParser = require("body-parser")
// const uuid = require("uuid")
// const cors = require("cors")({ origin: true })
// const dialogflow = require("@google-cloud/dialogflow")
// const serviceAccount = require("./service-account.json")
// //dialogflow request

// const dialogflowRequest = async (userText, res) => {
//   // A unique identifier for the given session

//   const sessionId = uuid.v4()

//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient({
//     credentials: serviceAccount,
//   })
//   const sessionPath = sessionClient.projectAgentSessionPath(
//     "tsredi-y9wa",
//     sessionId
//   )

//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: userText,
//         // The language used by the client (en-US)
//         languageCode: "en-US",
//       },
//     },
//   }

//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request)
//   console.log("Detected intent")
//   const result = responses[0].queryResult
//   console.log(`  Query: ${result.queryText}`)
//   console.log(`  Response: ${result.fulfillmentText}`)
//   return result.fulfillmentText
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`)
//   } else {
//     console.log("  No intent matched.")
//   }
// }

// exports.onCreateDevServer = ({ app }) => {
//   app.use(bodyParser.urlencoded({ extended: true }))
//   app.use(bodyParser.json())

//   app.post("/chatbot", async function (req, res) {
//     const result = await dialogflowRequest("hello")
//     res.send(result)
//   })
// }

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
          id
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
