import React, { useEffect, useState } from "react"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const Header = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useI18next()

  const [theme, changeTheme] = useState("dark")
  const [mobilenav, changeNav] = useState("wop")

  useEffect(() => {
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
    if (x === false) {
      document.querySelector(".menu-btn__burger").classList.add("open")
      xShow(true)
    } else {
      document.querySelector(".menu-btn__burger").classList.remove("open")
      xShow(false)
    }
  }

  return (
    <div className="relative">
      <div
        className={
          mobilenav +
          " mobile-nav w-full h-screen absolute text-center flex items-center justify-center bg-button text-white z-20"
        }
      >
        <ul className={" block text-xl font-semibold"}>
          <a href="#about">
            <li className="mt-3">{t("header.about")}</li>
          </a>
          <a href="#services">
            <li className="mt-3">{t("header.services")}</li>
          </a>
          <a href="#contact">
            <li className="mt-3">{t("header.contact")}</li>
          </a>
          <a href="#career">
            <li className="mt-3">{t("header.careers")}</li>
          </a>
          <li className="mt-3">
            <select
              className="  bg-[linear-gradient(135deg,#330867,#31a7bb)] dark:bg-black text-white border-0"
              value={language}
              onChange={e => changeLanguage(e.target.value)}
            >
              <option value="en"> {"EN"}</option>
              <option value="ka"> {"KA"}</option>
            </select>
          </li>
        </ul>
      </div>

      <div className=" border-white text-white font-medium dark:bg-black   h-16 w-full flex justify-center font-main relative z-30">
        <div className="border-t-2 w-full m-2  px-5 pt-2 flex justify-between">
          <div className="header text-2xl w-auto h-auto" id="main">
            <a href="#main">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 100"
                width={150}
                height={50}
              >
                <defs>
                  <style></style>
                </defs>
                <g>
                  <path
                    class="cls-5"
                    d="m148.59,39.05h-12.38v-7.71h155.41v7.71h-136.48v50.7h-6.55v-50.7Z"
                  />
                  <path
                    class="cls-5"
                    d="m171.64,88.15v-6.97c2.98,1.74,6.04,2.61,9.18,2.61,2.6,0,4.48-.46,5.65-1.38,1.17-.92,1.75-2.64,1.75-5.15,0-1.6-.25-2.87-.75-3.81-.5-.94-1.31-1.75-2.43-2.43-1.12-.68-2.8-1.45-5.05-2.32-3.33-1.31-5.67-2.96-7.02-4.97-1.35-2.01-2.02-4.78-2.02-8.31,0-4.16,1.01-7.39,3.03-9.69,2.02-2.3,4.97-3.45,8.85-3.45,1.7,0,3.34.18,4.93.54,1.59.36,2.88.81,3.87,1.34v6.97c-2.44-1.4-5.13-2.1-8.08-2.1-2.44,0-4.26.48-5.48,1.45-1.22.97-1.83,2.61-1.83,4.93,0,1.4.22,2.53.67,3.37.45.85,1.19,1.6,2.24,2.25,1.04.65,2.6,1.37,4.69,2.14,3.62,1.4,6.14,3.22,7.55,5.44,1.41,2.23,2.12,5.1,2.12,8.63,0,4.16-1.03,7.4-3.1,9.72-2.07,2.32-5.1,3.48-9.11,3.48s-7.23-.77-9.66-2.32Z"
                  />
                  <path
                    class="cls-5"
                    d="m198.61,43.02h14.23c3.37,0,5.87,1.31,7.5,3.92s2.45,6.29,2.45,11.03c0,3.34-.55,6.16-1.66,8.45-1.11,2.3-2.67,3.91-4.69,4.83.54.58.98,1.22,1.3,1.92.32.7.66,1.71,1.01,3.01l3.89,13.57h-5.38l-3.8-13.06c-.38-1.31-.83-2.21-1.35-2.72-.51-.51-1.33-.76-2.45-.76h-5.82v16.54h-5.24v-46.73Zm12.84,23.8c4.07,0,6.11-2.95,6.11-8.85s-1.87-8.78-5.62-8.78h-8.08v17.63h7.6Z"
                  />
                  <path
                    class="cls-5"
                    d="m227.94,43.02h21.59v6.17h-16.35v14.15h14.57v6.09h-14.57v14.22h16.35v6.09h-21.59v-46.73Z"
                  />
                  <path
                    class="cls-5"
                    d="m254.38,43.02h12.55c4.65,0,8.06,1.86,10.24,5.59,2.18,3.73,3.27,9.75,3.27,18.07s-1.09,13.82-3.27,17.52c-2.18,3.7-5.59,5.55-10.24,5.55h-12.55v-46.73Zm11.73,40.63c2.15,0,3.87-.47,5.17-1.41,1.3-.94,2.28-2.65,2.93-5.12.66-2.47.99-5.95.99-10.45s-.31-8.08-.91-10.59c-.61-2.51-1.56-4.29-2.86-5.33-1.3-1.04-3.07-1.56-5.31-1.56h-6.49v34.47h6.49Z"
                  />
                  <path
                    class="cls-5"
                    d="m285.58,43.02h5.24v46.73h-5.24v-46.73Z"
                  />
                </g>
                <g>
                  <g>
                    <g>
                      <polyline
                        class="cls-1"
                        points="137.51 74.22 119.32 74.22 128.6 74.22 128.6 9.74 60.2 9.74 60.2 90.48 128.6 90.48 128.51 81.05 133.63 81.03 123.28 81.03"
                      />
                      <g>
                        <path
                          class="cls-4"
                          d="m85.42,68.4c1.53,5.21.78,9.75,0,12.63l4.64,4.32h11.06l4.99-4.32c-.75-2.91-1.43-7.42,0-12.63,2.33-8.46,7.92-10.27,12.13-18.53,1.95-3.82,7.84-15.37,0-24.09-7.32-8.14-21.81-8.46-22.83-8.47-1.4-.01-15.06,0-22.48,7.41-9.45,9.46-1.36,23.58,0,25.94,4.46,7.78,10.09,9.56,12.49,17.74Z"
                        />
                        <line
                          class="cls-1"
                          x1="85.42"
                          y1="81.03"
                          x2="106.12"
                          y2="81.03"
                        />
                        <path class="cls-1" d="m86.3,75.02h18.98" />
                        <line
                          class="cls-1"
                          x1="85.42"
                          y1="68.4"
                          x2="106.12"
                          y2="68.4"
                        />
                      </g>
                    </g>
                    <ellipse
                      class="cls-3"
                      cx="101.43"
                      cy="34.92"
                      rx="9.94"
                      ry="7.37"
                    />
                  </g>
                  <polygon
                    class="cls-2"
                    points="87.8 81.89 90.62 84.42 100.72 84.42 103.54 81.89 87.8 81.89"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="  flex-row flex  items-center mt-1  ">
            <ul className={" flex-row sm:items-center hidden sm:flex  "}>
              <a href="#about">
                <li className="mx-2 ">{t("header.about")}</li>
              </a>
              <a href="#services">
                <li className="mx-2">{t("header.services")}</li>
              </a>
              <a href="#contact">
                {" "}
                <li className="mx-2">{t("header.contact")}</li>
              </a>
              <a href="#career">
                {" "}
                <li className="mx-2">{t("header.careers")}</li>
              </a>
              <li className="mx-2">
                <select
                  className="  bg-main dark:bg-black dark:text-white border-0"
                  value={language}
                  onChange={e => changeLanguage(e.target.value)}
                >
                  <option value="en"> {"EN"}</option>
                  <option value="ka"> {"KA"}</option>
                </select>
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
                <g clip-path="url(#clip0_1_15)">
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
            <div className="mobile-menu block sm:hidden ">
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
