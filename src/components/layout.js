import React from "react"
import Header from "./header"
import Footer from "./footer"
import Copyright from "./copyright"

const Layout = ({ children, footerData, headerData, context }) => {
  return (
    <>
      <Header headerData={headerData} context={context} />
      <main>{children}</main>
      <Footer footerData={footerData} />
      <Copyright />
    </>
  )
}

export default Layout
