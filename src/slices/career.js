import React, { useState } from "react"
import { MdArrowUpward } from "react-icons/md"
import CollapseGroup from "@geist-ui/core/esm/collapse/collapse-group"
import Collapse from "@geist-ui/core/esm/collapse/collapse"

export const Career = ({ slice }) => {
  const vacancies = slice.items.map((item, index) => {
    return (
      <CollapseGroup>
        <Collapse title={item.vacancyname.text.toUpperCase()}>
          <p className="font-main text-normal">{item.description.text}</p>
          <a href={item.formlink.url} className="underline ">
            {item.button.text.toUpperCase()}
          </a>
        </Collapse>
      </CollapseGroup>
    )
  })
  return (
    <div
      className="flex justify-center  w-full h-[auto] py-20  dark:bg-black font-main text-white text-semibold flex-col  "
      id="careers"
    >
      <div className="w-1/2 m-auto z-20">
        <div className="header ">
          <h1 className="text-3xl mx-2 mb-3 ">{slice.primary.title.text}</h1>
        </div>
        {vacancies}
      </div>
    </div>
  )
}
