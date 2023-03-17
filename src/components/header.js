import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import LanguageSwitcher from "./languageswitcher"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ headerData, context }) => {
  const [theme, changeTheme] = useState("dark")
  const [mobilenav, changeNav] = useState("wop")

  const pageHeaders = headerData.body[0].items.map((item, index) => {
    if (item.link.text === "blog") {
      return (
        <Link
          to={`/${item.link.text.toLowerCase()}`}
          key={index}
          onClick={e => scrollToDiv(item.link.text, e)}
          style={{ margin: "0 5px", fontFamily: "Kanit", whiteSpace: "nowrap" }}
        >
          <li className="my-3 hover:text-hovercolor">
            {item.header.text.toUpperCase()}
          </li>
        </Link>
      )
    } else {
      return (
        <Link
          to={`/#${item.link.text.toLowerCase()}`}
          key={index}
          onClick={e => scrollToDiv(item.link.text, e)}
          style={{ margin: "0 5px", fontFamily: "Kanit", whiteSpace: "nowrap" }}
        >
          <li className=" sm:my-1 hover:text-hovercolor">
            {item.header.text.toUpperCase()}
          </li>
        </Link>
      )
    }
  })

  const scrollToDiv = (path, e) => {
    if (window !== "undefined") {
      if (path !== "blog") {
        setTimeout(() => {
          let scroll = document.getElementById(`${path}`).offsetTop
          window.scrollTo({ top: scroll, behavior: "smooth" })
        }, 100)
      }
    }
  }

  useEffect(() => {
    if (window != "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
        document.getElementById("overlay").classList.add("overlay-hide")
        document.getElementById("circle").classList.add("white")
        document.querySelector(".moon-circle").classList.add("real-moon")
      } else {
        document.documentElement.classList.remove("dark")
        document.getElementById("overlay").classList.remove("overlay-hide")
        document.getElementById("circle").classList.remove("white")
        document.querySelector(".moon-circle").classList.remove("real-moon")
      }
    }
  }, [theme])

  const changeThemeColor = () => {
    changeTheme(theme === "dark" ? "light" : "dark")
  }

  const mobileMenuAnimation = () => {
    changeNav(mobilenav === "show-mobile-nav" ? "wop" : "show-mobile-nav")
    makeX()
  }

  const [x, xShow] = useState(false)

  const makeX = () => {
    if (window !== "undefined") {
      if (x === false) {
        document.querySelector(".menu-btn__burger").classList.add("open")
        xShow(true)
      } else {
        document.querySelector(".menu-btn__burger").classList.remove("open")
        xShow(false)
      }
    }
  }

  return (
    <div className="relative">
      <div
        className={
          mobilenav +
          "  mobile-nav w-full h-screen absolute text-center flex items-center justify-center bg-[#8A2BE2]  text-white z-30"
        }
      >
        <ul className={" block text-xl font-semibold"}>
          {pageHeaders}
          <LanguageSwitcher
            lang={context.lang}
            altLang={context.alternate_languages}
          />
        </ul>
      </div>

      <div className=" border-white text-white font-medium dark:bg-black   h-16 w-full flex justify-center font-main relative z-30">
        <div className="border-t-2 w-full m-2  px-5 pt-2 flex justify-between">
          <div className="header text-2xl w-auto h-auto" id="main">
            <Link to="/" className="h-[50px] block">
              <GatsbyImage
                image={headerData.logo.gatsbyImageData}
                alt={headerData.logo.alt}
              ></GatsbyImage>
            </Link>
          </div>
          <div className="  flex-row flex  items-center mt-1  ">
            <ul className="flex font-bold items-center sm:hidden ">
              {pageHeaders}
              <li className="mx-3 ">
                <LanguageSwitcher
                  lang={context.lang}
                  altLang={context.alternate_languages}
                />
              </li>
            </ul>
            <div
              onClick={() => changeThemeColor()}
              aria-label="auto"
              className="mx-2"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 73 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_15)">
                  <path
                    d="M37.8307 16.7564C27.6235 16.7564 19.3193 24.4917 19.3193 33.9999C19.3193 43.508 27.6235 51.2434 37.8307 51.2434C48.038 51.2434 56.3422 43.508 56.3422 33.9999C56.3422 24.4919 48.038 16.7564 37.8307 16.7564Z"
                    fill="#DBFF01"
                    id="circle"
                  />
                  <path
                    d="M65.4091 34L72.1879 25.5141C72.6513 24.9342 72.784 24.181 72.5442 23.4934C72.3043 22.8058 71.7217 22.2692 70.9809 22.0536L60.1421 18.9L60.2716 8.32321C60.2805 7.60026 59.9126 6.91821 59.2848 6.49325C58.6568 6.06829 57.8467 5.95305 57.1114 6.18441L46.3528 9.56761L39.7838 0.940033C39.3347 0.350319 38.6068 0 37.8307 0C37.0546 0 36.3268 0.350319 35.8777 0.940033L29.3085 9.56776L18.5497 6.18456C17.8143 5.95335 17.0042 6.06843 16.3764 6.4934C15.7486 6.91836 15.3807 7.60041 15.3896 8.32335L15.5192 18.9001L4.68048 22.0538C3.93966 22.2694 3.35703 22.806 3.11727 23.4935C2.87735 24.1811 3.01016 24.9342 3.47355 25.5143L10.2524 34.0002L3.47355 42.486C3.01016 43.0659 2.87751 43.8192 3.11727 44.5068C3.35703 45.1943 3.93982 45.7309 4.68048 45.9465L15.5192 49.1L15.3896 59.6768C15.3807 60.3997 15.7486 61.0818 16.3764 61.5068C17.0044 61.9316 17.8142 62.0468 18.5497 61.8156L29.3085 58.4324L35.8777 67.0601C36.3268 67.6498 37.0546 68.0002 37.8307 68.0002C38.6068 68.0002 39.3347 67.6498 39.7838 67.0601L46.353 58.4324L57.1116 61.8156C57.8468 62.0468 58.6569 61.9317 59.2849 61.5068C59.9127 61.0818 60.2807 60.3997 60.2717 59.677L60.1423 49.1L70.981 45.9465C71.7218 45.7309 72.3045 45.1943 72.5444 44.5068C72.7841 43.8192 72.6515 43.0661 72.1881 42.486L65.4091 34ZM37.8307 55.7042C24.983 55.7042 14.5305 45.9677 14.5305 33.9999C14.5305 22.0321 24.983 12.2957 37.8307 12.2957C50.6785 12.2957 61.131 22.0321 61.131 33.9999C61.131 45.9677 50.6785 55.7042 37.8307 55.7042Z"
                    fill="#DBFF01"
                    id="overlay"
                  />

                  <circle
                    cx="53"
                    cy="30"
                    r="18"
                    fill="black"
                    className="moon-circle"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_15">
                    <rect
                      width="73
                    "
                      height="68"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mobile-menu    hidden sm:block">
              <div
                className="menu-btn__burger "
                size="30"
                onClick={() => mobileMenuAnimation()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
