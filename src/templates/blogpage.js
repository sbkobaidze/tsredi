import { graphql } from "gatsby"
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Copyright from "../components/copyright"
import Articles from "../components/blog/page/articles"
import BlogStory from "../components/blog/page/blogstory"
import PopularBlogArticles from "../components/blog/page/popularblogarticles"
import Seo from "../components/seo"

const blogpage = ({ data }) => {
  const document = data.prismicBlog || {}
  const footer = data.prismicFooter || {}
  const navbar = data.prismicHeader.data || {}
  const newsletter = data.prismicBlogmain.data.body[0].primary || {}
  const allBlogs = data.allPrismicBlog.nodes || {}

  console.log(allBlogs)
  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Header headerData={navbar} context={document} />
      <Articles
        title={document.data.blogtitle.text}
        image={document.data.blogimage}
      />
      <BlogStory
        paragraph={document.data.text.html}
        author={document.data.author.text}
        authorImage={document.data.authorpic}
        authorSocialMedia={document.data.authorsocialmedia}
        date={document.data.date}
        newsletter={newsletter}
      />
      <PopularBlogArticles
        everyBlog={allBlogs}
        currentBlog={document.uid}
        lang={document.lang}
      />
      <Footer footerData={footer} />
      <Copyright />
    </div>
  )
}

export default blogpage

export const Head = ({ data }) => (
  <Seo
    title={data.prismicBlog.data.blogtitle.text}
    description={data.prismicBlogmain.data.metadescription.text}
  />
)

export const query = graphql`
  query ($lang: String) {
    prismicBlog(lang: { eq: $lang }) {
      id
      lang
      alternate_languages {
        lang
        id
        type
        uid
      }
      uid
      data {
        author {
          text
        }
        blogtitle {
          text
        }
        metadescription {
          text
        }
        blogimage {
          alt
          url
        }
        date
        text {
          html
        }
        authorpic {
          url
          alt
        }
        authorsocialmedia {
          url
        }
      }
    }

    allPrismicBlog(
      sort: { data: { date: DESC } }
      filter: { lang: { eq: $lang } }
    ) {
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

    prismicBlogmain(lang: { eq: $lang }) {
      lang
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
