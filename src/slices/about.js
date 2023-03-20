import React from "react"
import Lottie from "lottie-react"
import Animation from "../components/Animations/about-us.json"

export const About = ({ slice }) => {
  return (
    <div
      className=" h-[auto]   bg-secondary relative flex items-center"
      id="about"
    >
      <div className=" w-[80%]  m-[auto] bg-[linear-gradient(90deg,#6E45E1,#89D4CF)]  h-[auto] flex lg:flex-col  lg:h-[80%] rounded-2xl  ">
        <div className="img w-[50%]    lg:w-[100%]  h-[auto] p-10  ">
          <Lottie
            animationData={Animation}
            style={{ height: "350px" }}
          ></Lottie>
        </div>
        <div className="about-text w-[60%]   lg:w-[100%] h  font-main font-normal text-white p-10 lg:pt-0 ">
          <h2 className="text-5xl hid font-semibold lg:text-4xl mb-5 ">
            {slice.primary.header.text}
          </h2>
          <p className="hid"> {slice.primary.description.text}</p>
        </div>
      </div>
    </div>
  )
}
