import React from "react"
import Header from "./header"
import Footer from "./footer"
import Copyright from "./copyright"
import Chatbot from "./chatbot"

const Layout = ({ children, footerData, headerData, context }) => {
  return (
    <>
      <Header headerData={headerData} context={context} />
      <Chatbot />
      <main>{children}</main>
      <Footer footerData={footerData} />
      <Copyright />
    </>
  )
}

export default Layout
