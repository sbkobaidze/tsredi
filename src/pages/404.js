import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="dark:bg-black bg-[linear-gradient(135deg,#330867,#31a7bb)]">
      <Header />
      <div className=" w-full h-screen font-main font-semibold flex justify-center items-center">
        <h1 className="text-5xl text-white">404</h1>
      </div>
      <Footer />
    </div>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

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
