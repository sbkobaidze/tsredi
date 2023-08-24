import React from "react"
import Header from "./header"
import Footer from "./footer"
import Copyright from "./copyright"
import Chatbot from "./chatbot"

const Layout = ({ children, footerData, headerData, document }) => {
  return (
    <>
      <Header headerData={headerData} data={document} />
      <Chatbot />
      <main>{children}</main>
      <Footer footerData={footerData} />
      <Copyright />
    </>
  )
}

export default Layout
