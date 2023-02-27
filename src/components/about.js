import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Lottie from "lottie-react"
import Animation from "./Animations/animation.json"
import { useEffect } from "react"

const About = () => {
  const { t } = useTranslation()
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
    <div
      className=" h-[auto]   bg-secondary relative flex items-center"
      id="about"
    >
      <div className=" w-[80%]  m-[auto] bg-[linear-gradient(90deg,#6E45E1,#89D4CF)]  h-[auto] flex  max-[900px]:flex-col  max-[900px]:h-[80%] rounded-2xl max-[900px]:overflow-y-scroll ">
        <div className="img w-[50%]    max-[900px]:w-[100%]  h-[auto] p-10  ">
          <Lottie animationData={Animation}></Lottie>
        </div>
        <div className="about-text w-[60%]   max-[900px]:w-[100%] h  font-main font-normal text-white p-10 max-[900px]:pt-0 ">
          <h2 className="text-5xl hid font-semibold max-[900px]:text-2xl mb-5 ">
            {t("about.header")}
          </h2>
          <p className="hid">{t("about.text")}</p>
        </div>
      </div>
    </div>
  )
}

export default About
