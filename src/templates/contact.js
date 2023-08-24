import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import "../components/layout.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Seo from '../components/seo'

import {
  withPrismicPreview,
  withPrismicUnpublishedPreview,
} from "gatsby-plugin-prismic-previews"
import ContactBox from '../components/contact'
const Contact = ({ data }) => {
    const footer = data.prismicFooter || {}
  const navbar = data.prismicHeader.data || {}
  const document = data.prismicContact

 

    return (
      <div className='dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]  '>
                <ToastContainer />

        <Layout footerData={footer} headerData={navbar} document={document}>
          <ContactBox doc={document} />
        
            </Layout></div>
  )
}

export const Head = ({ data }) => {
  console.log(data)
  return (
    <Seo
      title={data.prismicContact.data.metaheader.text}
      description={data.prismicContact.data.metadescription.text}
    />
  )
}
export default withPrismicUnpublishedPreview(withPrismicPreview(Contact))


export const query = graphql`
  query ($lang: String) {

    prismicContact(lang: { eq: $lang }) {
      type
        id
        lang
       
        data {
          metadescription {
            text
          }
          metaheader {
            text
          }
          button {
            text
          }
          company {
            text
          }
          description {
            text
          }
          email {
            text
          }
          lastname {
            text
          }
          name {
            text
          }
          phone {
            text
          }
          getstarted {
            text
          }
          maindescription {
            text
          }
        }
        alternate_languages {
          lang
          id
          type
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
