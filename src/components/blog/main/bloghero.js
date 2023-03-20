import React from "react"
import { ToastContainer } from "react-toastify"
import Subscribe from "../subscribe"
import Lottie from "lottie-react"
import bloganimation from "../../Animations/bloganimation.json"

const BlogHero = ({ pageHeader, newsletter }) => {
  return (
    <div className="w-full h-[80vh] max-[1000px]:h-[80vh] font-main font-semibold reative dark:bg-black relative">
      <ToastContainer />
      <div className="w-[80%] h-full  m-auto  overflow-hidden  ">
        <div className="text  absolute top-[15%] left-[10%] z-40 sm:top-[40%] ">
          <h1 className="text-6xl text-white ">{pageHeader}</h1>
          <div className="newsletter my-2 ">
            <Subscribe newsLetterData={newsletter} />
          </div>
        </div>
        <div className=" absolute z-30 right-0  overflow-hidden max-[640px]:top-[20%] max-[640px]:left-1 ">
          <Lottie
            animationData={bloganimation}
            style={{ height: "500px" }}
          ></Lottie>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1677145451 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default BlogHero
