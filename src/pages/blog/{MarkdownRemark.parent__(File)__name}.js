import React from "react"
import { graphql } from "gatsby"
import Footer from "../../components/footer"
import Navbar from "../../components/header"
import BlogContent from "../../components/blog/page/BlogContent"
import BlogText from "../../components/blog/page/BlogText"
import ReadMore from "../../components/blog/page/ReadMore"

const BlogPostPage = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  const heroImage = data.markdownRemark.frontmatter.heroImage
  const blogImage = data.markdownRemark.frontmatter.blogImage
  const date = data.markdownRemark.frontmatter.date
  const description = data.markdownRemark.frontmatter.description
  const fileName = data.markdownRemark.frontmatter.fileName
  const blogCount = data.allMarkdownRemark.nodes
  console.log(blogCount)

  return (
    <div className="wrapper bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Navbar />
      <BlogContent title={title} image={heroImage} />
      <BlogText text={html} image={blogImage} />
      <ReadMore blogCount={blogCount} title={fileName} />
      <Footer />
    </div>
  )
}

export default BlogPostPage

export const Head = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title}</title>
    <meta
      name="description"
      content={data.markdownRemark.html.match(/(?<=<p>)(.*?)(?=<\/p>)/g)}
    />
    <meta property="og:type" content="blog" />
    <meta
      property="og:image"
      content={data.markdownRemark.frontmatter.heroImage}
    />
    <meta property="og:site_name" content="Tsredi - Blog" />
    <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
    <meta
      property="og:description"
      content={data.markdownRemark.html.match(/(?<=<p>)(.*?)(?=<\/p>)/g)}
    />
  </>
)

export const query = graphql`
  query ($language: String!, $id: String) {
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

    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          heroImage
          date
          description
          fileName
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        heroImage
        blogImage
        date
        description
        fileName
      }
    }
  }
`
