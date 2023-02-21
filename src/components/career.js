import React, { useState } from "react"
import { MdArrowUpward } from "react-icons/md"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Career = () => {
  const { t } = useTranslation()
  const [height, increaseHeight] = useState("h-10 items-center")
  const [arrow, arrowRotation] = useState("")

  const rotateArrow = () => {
    arrowRotation(arrow === "" ? "rotate-180" : "")
  }
  const showVacancy = () => {
    if (window.screen.width > 900) {
      increaseHeight(
        height === "h-10 items-center"
          ? "h-66 items-start"
          : "h-10 items-center"
      )
    } else {
      increaseHeight(
        height === "h-10 items-center"
          ? "h-84 items-start"
          : "h-10 items-center"
      )
    }
  }
  return (
    <div
      className="flex justify-center  w-full h-[auto] py-20  dark:bg-black font-main text-white text-semibold flex-col  "
      id="career"
    >
      <div className="w-1/2 m-auto z-20">
        <div className="header ">
          <h1 className="text-2xl ">{t("vacancies.header")}</h1>
          <h2>{t("vacancies.text")}</h2>
        </div>
        <div
          className={
            height +
            " mt-5 border-t border-b  flex-col transition-all cursor-pointer overflow-hidden flex   "
          }
        >
          <div className={"      text-xl pt-1   w-full "}>
            <h1 className="float-left">{t("vacancies.vacancie1")}</h1>
            <div className="float-right" onClick={() => showVacancy()}>
              <MdArrowUpward
                size={30}
                onClick={() => rotateArrow()}
                className={arrow + " transition-all "}
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="text">
              <p></p>
            </div>
            <div className="button text-xl mt-5 max-[900px]:mt-2 underline ">
              <a
                href="https://cvkuhu439xi.typeform.com/to/LmRR4HWo"
                target="_blank"
              >
                APPLY{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
