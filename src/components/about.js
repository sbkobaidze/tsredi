import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

const About = () => {
  const { t } = useTranslation()
  return (
    <div
      className=" h-[120vh]  dark:bg-black relative flex items-center"
      id="about"
    >
      <div class=" custom-shape-divider-top-1673962769">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className=" shape-fill"
          ></path>
        </svg>
      </div>
      <div className=" w-[80%]  m-[auto] bg-secondary  h-[auto] flex  max-[900px]:flex-col  max-[900px]:h-[80%] rounded-md ">
        <div className="img w-[40%]    max-[700px]:w-[100%] max-[900px]:w-[70%]   h-full p-10  ">
          <StaticImage
            src={"../images/blob.png"}
            className="rounded-md"
            alt="tsredi-blob"
          ></StaticImage>
        </div>
        <div className="about-text w-[60%]  max-[900px]:w-[100%] h-full font-main font-semibold p-10 max-[900px]:pt-0 ">
          <h2 className="text-5xl  max-[900px]:text-2xl mb-5">
            {t("about.header")}
          </h2>
          <p>{t("about.text")}</p>
        </div>
      </div>
    </div>
  )
}

export default About
