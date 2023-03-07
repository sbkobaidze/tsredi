import React, { useState } from "react"
import { MdArrowUpward } from "react-icons/md"

export const Career = ({ slice }) => {
  const [height, increaseHeight] = useState({ key: "h-10 items-center" })
  const [arrow, arrowRotation] = useState("")

  const rotateArrow = () => {
    arrowRotation(arrow === "" ? "rotate-180" : "")
  }

  const showVacancy = e => {
    console.log(e.target)
    rotateArrow()
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
  const vacancies = slice.items.map((item, index) => {
    return (
      <div
        onClick={e => showVacancy(e)}
        key={"0"}
        data-item={item}
        className={
          "h-10 mt-5 border-t border-b  flex-col transition-all cursor-pointer overflow-hidden flex   "
        }
      >
        <div className={"      text-xl pt-1   w-full "}>
          <h1 className="float-left">{item.vacancyname.title}</h1>
          <div className="float-right">
            <MdArrowUpward size={30} className={arrow + " transition-all "} />
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <div className="text">
            <p>{item.description.text}</p>
          </div>
          <div className="button text-xl mt-5 lg:mt-2 underline ">
            <a href={item.formlink.url} target="_blank">
              {item.button.text}
            </a>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div
      className="flex justify-center  w-full h-[auto] py-20  dark:bg-black font-main text-white text-semibold flex-col  "
      id="career"
    >
      <div className="w-1/2 m-auto z-20">
        <div className="header ">
          <h1 className="text-2xl ">{slice.primary.title.text}</h1>
          <h2></h2>
        </div>

        {vacancies}
      </div>
    </div>
  )
}
