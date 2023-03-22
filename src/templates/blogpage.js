import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Articles from "../components/blog/page/articles"
import BlogStory from "../components/blog/page/blogstory"
import PopularBlogArticles from "../components/blog/page/popularblogarticles"
import Seo from "../components/seo"
import {
  withPrismicPreview,
  withPrismicUnpublishedPreview,
} from "gatsby-plugin-prismic-previews"

const Blogpage = ({ data }) => {
  const dc = data.prismicBlog || {}
  const footer = data.prismicFooter || {}
  const navbar = data.prismicHeader.data || {}
  const newsletter = data.prismicBlogmain.data.body[0].primary || {}
  const allBlogs = data.allPrismicBlog.nodes || {}

  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Layout footerData={footer} context={dc} headerData={navbar}>
        <Articles title={dc.data.blogtitle.text} image={dc.data.blogimage} />

        <BlogStory
          paragraph={dc.data.text.html}
          author={dc.data.author.text}
          authorImage={dc.data.authorpic}
          authorSocialMedia={dc.data.authorsocialmedia}
          date={dc.data.date}
          newsletter={newsletter}
        />
        <PopularBlogArticles
          everyBlog={allBlogs}
          currentBlog={dc.uid}
          lang={dc.lang}
        />
      </Layout>
    </div>
  )
}

export const Head = ({ data }) => {
  return (
    <Seo
      title={data.prismicBlog.data.blogtitle.text}
      description={data.prismicBlog.data.metadescription.text}
    />
  )
}

export default withPrismicUnpublishedPreview(withPrismicPreview(Blogpage))

export const query = graphql`
  query ($lang: String, $id: String, $uid: String) {
    prismicBlog(lang: { eq: $lang }, id: { eq: $id }) {
      alternate_languages {
        lang
        id
        type
        uid
      }
      id
      lang
      url

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
      filter: { lang: { eq: $lang }, uid: { ne: $uid } }
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
