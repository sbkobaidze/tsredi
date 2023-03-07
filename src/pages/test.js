import * as React from "react"

import "../components/layout.css"
import { graphql } from "gatsby"
import About from "../slices/about"
import Testimonials from "../slices/testimonials"
import Contact from "../slices/contact"
import Brands from "../slices/brands"
import Career from "../slices/career"
import { useRef } from "react"
import Newservices from "../slices/services"
import { GeistProvider } from "@geist-ui/core"
import Footer from "../components/footer"
import Copyright from "../components/copyright"
import { useEffect } from "react"

const IndexPage = ({ data }) => {
  //
  console.log(data)
  const currentPage = data.prismicHomepage

  const lang = currentPage.lang
  const altLang = currentPage.alternate_languages

  //languages

  //scroll animations
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hid")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })

    hiddenElements.forEach(el => observer.observe(el))
  })
  return (
    <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]  dark:bg-black border-1">
      <GeistProvider>
        <About />
        <Footer />
        <Copyright />
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
  query ($lang: String) {
    prismicHomepage(lang: { eq: $lang }) {
      lang
      id

      alternate_languages {
        lang
        id
        type
        uid
      }
    }
  }
`
