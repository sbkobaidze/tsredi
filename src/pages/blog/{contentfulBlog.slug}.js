import * as React from "react"
import { graphql } from "gatsby"
import BlogText from "../../components/blog/page/blogtext"
import Layout from "../../components/layout"
import BlogContent from "../../components/blog/page/blogcontent"
import ReadMore from "../../components/blog/page/readmore"
import "../components/layout.css"

const Page = ({ data }) => {
  const blogCount = data.allContentfulBlog.nodes

  const blogJSON = JSON.stringify(data)
  const blogObj = JSON.parse(blogJSON).contentfulBlog
  console.log(blogObj)

  const blogId = blogObj.id
  const blogHeroImage = blogObj.blogHeroImage.publicUrl
  const blogTitle = blogObj.title
  const blogParagraph = blogObj.blogParagraph.childMarkdownRemark.html
  const blogWrieDate = blogObj.writeDate
  const blogAuthor = blogObj.author
  const blogSlug = blogObj.slug
  const blogAuthorMedia = blogObj.authorSocialMedia
  const authorPic = blogObj.authorPic.publicUrl

  return (
    <div className="wrapper bg-[linear-gradient(135deg,#330867,#31a7bb)] ">
      <Layout>
        <BlogContent title={blogTitle} image={blogHeroImage} />
        <BlogText
          paragraph={blogParagraph}
          writeDate={blogWrieDate}
          author={blogAuthor}
          blogSlug={blogSlug}
          blogCount={blogCount}
          authorPic={authorPic}
          authorSocialMedia={blogAuthorMedia}
        />
        <ReadMore blogCount={blogCount} blogId={blogId} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ($id: String, $language: String!) {
    contentfulBlog(id: { eq: $id }) {
      id
      slug
      title
      author
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

      writeDate
    }

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

export default Page
