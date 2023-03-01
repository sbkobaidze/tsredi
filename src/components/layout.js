import React from "react"
import Navbar from "./header"
import Footer from "./footer"
import Copyright from "./copyright"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </>
  )
}

export default Layout
