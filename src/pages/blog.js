import * as React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Bloghero from "../components/blog/main/bloghero"
import Blogcards from "../components/blog/main/BlogCardsContainer"
import "../components/layout.css"
import Newsletter from "../components/blog/main/newsletter"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  const arrayData = data.allMarkdownRemark
  return (
    <div className="dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Layout>
        <Bloghero />
        <Blogcards data={arrayData} />
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date
          description
          heroImage
          title
          fileName
        }
        id
      }
    }
  }
`