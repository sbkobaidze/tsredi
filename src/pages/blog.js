import * as React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import BlogHero from "../components/blog/main/bloghero"
import Layout from "../components/layout"
import ArticleContainer from "../components/blog/main/articlecontainer"
import "../components/layout.css"
import BlogBottom from "../components/blog/main/blogmainbottom"

const Blog = ({ data }) => {
  ""
  const blogData = data.allContentfulBlog.nodes
  return (
    <div className="dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Layout>
        <BlogHero />
        <ArticleContainer blogData={blogData} />
        <BlogBottom />
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
