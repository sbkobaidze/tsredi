import React from "react"
import { graphql } from "gatsby"
import "../components/layout.css"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { PrismicProvider } from "@prismicio/react"
import { components } from "../slices/index"
import Layout from "../components/layout"

const Homepage = ({ data }) => {
  const document = data.prismicHomepage || {}
  const footer = data.prismicFooter || {}
  const navbar = data.prismicHeader.data || {}

  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <PrismicProvider>
        <Layout footerData={footer} context={document} headerData={navbar}>
          <SliceZone components={components} slices={document.data.body} />
        </Layout>
      </PrismicProvider>
    </div>
  )
}

export const Head = ({ data }) => (
  <>
    <Seo
      title={data.prismicHomepage.data.herobutton.text}
      description={data.prismicHomepage.data.metadescription.text}
    />
  </>
)

export default Homepage

export const query = graphql`
  query ($lang: String) {
    prismicHomepage(lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        id
        type
        uid
        lang
      }

      type
      id
      lang
      data {
        herobutton {
          text
        }
        metadescription {
          text
        }
        metaimage {
          url
        }

        body {
          ... on PrismicHomepageDataBodyHomehero {
            id
            slice_label
            slice_type
            primary {
              button {
                text
              }
              description {
                text
              }
              header {
                text
              }
            }
          }
          ... on PrismicHomepageDataBodyProjects {
            id
            items {
              img {
                url
              }
              link {
                url
              }
              minidescription {
                text
              }
              projectheader {
                text
              }
            }
            primary {
              header {
                text
              }
            }
            slice_label
            slice_type
          }

          ... on PrismicHomepageDataBodyCustomerLogos {
            id
            slice_label
            slice_type
            items {
              link {
                url
              }
              logo {
                gatsbyImageData(height: 100)
                alt
              }
            }
            primary {
              eyebrow_headline {
                text
              }
            }
          }
          ... on PrismicHomepageDataBodyServices {
            id
            items {
              description {
                text
              }
              title {
                text
              }
              img {
                url
              }
              alt {
                text
              }
            }
            primary {
              title {
                text
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicHomepageDataBodyAbout {
            id
            slice_label
            slice_type
            primary {
              description {
                text
              }
              header {
                text
              }
              animation {
                text
              }
            }
          }
          ... on PrismicHomepageDataBodyContact {
            id
            slice_label
            slice_type
            items {
              placeholder {
                text
              }
              type {
                text
              }
            }
            primary {
              contactheader {
                text
              }
              button {
                text
              }
              textarea {
                text
              }
            }
          }
          ... on PrismicHomepageDataBodyCareer {
            id
            items {
              button {
                text
              }
              description {
                text
              }
              formlink {
                url
              }
              vacancyname {
                text
              }
            }
            primary {
              title {
                text
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicHomepageDataBodyTestimonials {
            id
            slice_label
            slice_type
            items {
              brand {
                text
              }
              brandlink {
                url
              }
              img {
                url
              }
              name {
                text
              }
              testimonial {
                text
              }
            }
            primary {
              header {
                text
              }
            }
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
