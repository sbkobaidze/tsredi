import * as React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Bloghero from "../components/blog/main/bloghero"
import "../components/layout.css"
import Newsletter from "../components/blog/main/newsletter"
import Layout from "../components/layout"
import BlogCardsContainer from "../components/blog/main/blogcardscontainer"

const Blog = ({ data }) => {
  const blogData = data.allContentfulBlog.nodes
  return (
    <div className="dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Layout>
        <Bloghero />
        <BlogCardsContainer blogData={blogData} />
        <Newsletter />
      </Layout>
    </div>
  )
}

export const Head = () => (
  <Seo title="Blog - Read Latest Articles About Digital Industry" />
)

export default Blog

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["language"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    allContentfulBlog {
      nodes {
        id
        slug
        title
        writeDate
        blogHeroImage {
          publicUrl
        }

        authorSocialMedia
        authorPic {
          publicUrl
        }

        blogParagraph {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

// allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
//   nodes {
//     frontmatter {
//       date
//       description
//       heroImage
//       title
//       fileName
//     }
//     id
//   }
// }
