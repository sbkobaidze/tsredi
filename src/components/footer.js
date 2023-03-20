import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { scrollToDiv } from "../utils/divScroller"

const Footer = ({ footerData }) => {
  const footerHeaders = footerData.data.body[0].items.map(header => {
    if (header.link.text === "blog") {
      return (
        <Link
          to={"/" + header.link.text}
          onClick={e => scrollToDiv(header.link.text, e)}
        >
          <li className="mx-2 hover:text-hovercolor">
            {header.header.text.toUpperCase()}
          </li>
        </Link>
      )
    } else {
      return (
        <Link
          to={"/#" + header.link.text}
          onClick={e => scrollToDiv(header.link.text, e)}
        >
          <li className="mx-2 hover:text-hovercolor">
            {header.header.text.toUpperCase()}
          </li>
        </Link>
      )
    }
  })

  return (
    <div className="w-full   p-10 dark:bg-black ">
      <div>
        <div className="   font-main flex  text-white justify-between ">
          <div className="logo-contact">
            <div className="name mr-10 text-2xl font-bold ">
              <Link to="/">
                <GatsbyImage
                  image={footerData.data.logo.gatsbyImageData}
                  alt={footerData.data.logo.alt}
                />
              </Link>
            </div>
            <div className="flex flex-col pt-1">
              <div className="ml-[23px] font-main font-semibold hover:text-hovercolor">
                {footerData.data.email.text}
              </div>
              <div className="flex items-center  ml-[23px] w-full mt-2">
                <a
                  href={footerData.data.body[0].primary.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaFacebook
                    className="mr-1 hover:text-hovercolor"
                    size={20}
                  />{" "}
                </a>
                <a
                  href={footerData.data.body[0].primary.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin
                    className="mr-1 hover:text-hovercolor"
                    size={20}
                  />
                </a>
                <a
                  href={footerData.data.body[0].primary.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    className="mr-1 hover:text-hovercolor"
                    size={20}
                  />
                </a>
                <a
                  href={footerData.data.body[0].primary.twitter.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="mr-1 hover:text-hovercolor" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="links text-md pt-1 ">
            <ul className="font-semibold">{footerHeaders}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
