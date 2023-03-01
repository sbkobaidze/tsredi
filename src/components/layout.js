import React from "react"
import Navbar from "./header"
import Footer from "./footer"
import Copyright from "./copyright"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  )
}

export default Layout
