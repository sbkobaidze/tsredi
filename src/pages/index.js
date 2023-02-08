import * as React from "react"

import Header from "../components/header"
import "../components/layout.css"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Brands from "../components/brands"
import Career from "../components/career"
import { useRef } from "react"

const IndexPage = () => {
  const ref = useRef()
  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]  dark:bg-black border-0">
      <Header />
      <Hero reffed={ref} />
      <Brands />
      <Services />
      <About />
      <Testimonials />
      <Contact ref={ref} />
      <Career />
      <Footer />
    </div>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <div>
    <Seo title="TEST" /> <title>TEST</title>
  </div>
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
