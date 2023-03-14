import * as React from "react"
import "../components/layout.css"

import Seo from "../components/seo"
import { graphql } from "gatsby"
import BlogHero from "../components/blog/main/bloghero"
import ArticleContainer from "../components/blog/main/articlecontainer"
import BlogBottom from "../components/blog/main/blogmainbottom"
import Header from "../components/header"
import Footer from "../components/footer"
import Copyright from "../components/copyright"

const Blog = ({ data }) => {
  const blogData = data.prismicBlogmain.data || {}
  const footer = data.prismicFooter || {}
  const navbar = data.prismicHeader.data || {}

  const allBlogs = data.allPrismicBlog.nodes || {}

  return (
    <div className="dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Header context={data.prismicBlogmain} headerData={navbar} />

      <BlogHero
        pageHeader={blogData.pageheader.text}
        newsletter={blogData.body[0].primary}
      />
      <ArticleContainer
        pageHeader={blogData.secondheader.text}
        blogData={allBlogs}
        currentLang={data.prismicBlogmain.lang}
      />
      <BlogBottom pageHeader={blogData.thirdheader.text} />
      <Footer footerData={footer} />
      <Copyright />
    </div>
  )
}

export const Head = ({ data }) => (
  <Seo
    title={data.prismicBlogmain.data.metatitle.text}
    description={data.prismicBlogmain.data.metadescription.text}
  />
)

export const query = graphql`
  query ($lang: String) {
    prismicBlogmain(lang: { eq: $lang }) {
      _previewable
      lang
      uid
      alternate_languages {
        id
        type
        uid
        lang
      }
      data {
        body {
          ... on PrismicBlogmainDataBodyNewslettercard {
            id
            primary {
              button {
                text
              }
              header {
                text
              }
              placeholder {
                text
              }
            }
            slice_label
            slice_type
          }
        }
        metadescription {
          text
        }
        metatitle {
          text
        }
        thirdheader {
          text
        }
        secondheader {
          text
        }
        pageheader {
          text
        }
      }
    }

    allPrismicBlog(sort: { data: { date: DESC } }) {
      nodes {
        id
        uid
        lang
        data {
          date
          blogtitle {
            text
          }
          blogimage {
            url
          }
        }
      }
    }
    prismicFooter(lang: { eq: $lang }) {
      data {
        body {
          ... on PrismicFooterDataBodyTopmenu {
            id
            items {
              header {
                text
              }
              link {
                text
              }
            }
            primary {
              facebook {
                url
              }
              instagram {
                url
              }
              linkedin {
                url
              }
              twitter {
                url
              }
            }
            slice_label
            slice_type
          }
        }
        email {
          text
        }
        logo {
          gatsbyImageData(height: 50)
          alt
        }
      }
    }

    prismicHeader(lang: { eq: $lang }) {
      data {
        body {
          ... on PrismicHeaderDataBodyNavbar {
            id
            items {
              header {
                text
              }
              link {
                text
              }
            }
            slice_label
            slice_type
          }
        }
        logo {
          gatsbyImageData(height: 50)
          alt
        }
      }
    }
  }
`
export default Blog
