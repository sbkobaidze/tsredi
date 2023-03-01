import * as React from "react"

import "../components/layout.css"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Brands from "../components/brands"
import Career from "../components/career"
import { useRef } from "react"
import Newservices from "../components/newservices"
import { GeistProvider } from "@geist-ui/core"
import Layout from "../components/layout"

const IndexPage = () => {
  const ref = useRef()
  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]  dark:bg-black border-1">
      <GeistProvider>
        <Layout>
          <Hero reffed={ref} />

          <Brands />
          <Newservices />
          <About />
          <Testimonials />
          <Contact ref={ref} />
          <Career />
        </Layout>
      </GeistProvider>
    </div>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <title>Tsredi - Multidisciplinary Digital Agency</title>
    <meta
      name="description"
      content=" Looking to improve your online presence? Tsredi's digital marketing
      services have got you covered! We specialize in Search Engine Marketing,
      Social Media Marketing, UI/UX design, Blockchain Development, Game
      Development, App Development, Web Development, and Email Marketing.
      Partner with us to drive traffic, increase conversions, and achieve your
      business goals. Transform your online presence with Tsredi's comprehensive
      digital marketing services. Contact us today!"
    />
    <meta property="og:type" content="blog" />
    <meta
      property="og:image"
      content="https://tsredi.com/icons/icon-48x48.png?v=3ce5c222fe783d169e44f134f9439616"
    />
    <meta property="og:site_name" content="Tsredi" />
    <meta
      property="og:title"
      content="Tsredi - Multidisciplinary Digital Agency From Georgia"
    />
    <meta
      property="og:description"
      content="We specialize in Search Engine Marketing,
    Social Media Marketing, UI/UX design, Blockchain Development, Game
    Development, App Development, Web Development, and Email Marketing."
    />

    <meta name="twitter:site" content="@tsredi"></meta>
    <meta name="twitter:creatoer" content="@tsredi"></meta>
    <meta
      name="twitter:title"
      content="Tsredi - Multidisciplinary Digital Agency From Georgia"
    ></meta>
    <meta
      name="twitter:description"
      content="We specialize in Search Engine Marketing,
    Social Media Marketing, UI/UX design, Blockchain Development, Game
    Development, App Development, Web Development, and Email Marketing."
    ></meta>
    <meta
      property="twitter:image:src"
      content="https://tsredi.com/icons/icon-48x48.png?v=3ce5c222fe783d169e44f134f9439616"
    />
  </>
)
export default IndexPage

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
  }
`
