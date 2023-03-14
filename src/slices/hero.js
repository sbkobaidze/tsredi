import React from "react"
import { Button } from "@mui/material"
import Animation from "../components/Animations/aboutAnimation.json"
import Lottie from "lottie-react"
import { Canvas } from "@react-three/fiber"
import Starbackground from "../components/Animations/Starbackground"

export const Hero = ({ slice }) => {
  const heroData = slice.primary

  //star animations

  return (
    <div
      className="relative w-full h-[100vh] dark:bg-black  sm:h-[110vh]"
      id="hero"
    >
      <Canvas style={{ position: "absolute" }}>
        <Starbackground />
      </Canvas>
      <div class="custom-shape-divider-bottom-1676905600">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className=" h-full w-[80%] relative mx-auto inherit  z-10    ">
        <div className="text-white text-7xl top-[25%]  font-main font-semibold z-20 absolute left-0  sm:top-[10%] sm:text-6xl">
          <h1 className="mb-3  sm:mb-0 text-7xl sm:text-5xl " id="canvas3d">
            {heroData.header.text}
          </h1>
          <h1 className="effectedtext  my-2 sm:my-0 text-7xl sm:text-5xl">
            {" "}
            {heroData.description.text}
            <span className="effectContainer">
              <span className="effectStar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z"></path>
                </svg>
              </span>
              <span className="effectStar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z"></path>
                </svg>
              </span>
              <span className="effectStar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z"></path>
                </svg>
              </span>
            </span>
          </h1>
          <div className="block">
            <Button
              sx={{ color: "white", fontWeight: "bold" }}
              className="bg-[linear-gradient(135deg,#FFDD00,#Fbb034)]  my-2 font-main  w-60 h-16 border-3"
            >
              {heroData.button.text}
            </Button>
          </div>
        </div>
        <div className="h-[500px] w-[50%]  top-[10%] sm:top-[0]   right-0  absolute sm:translate-y-[250px] sm:w-[100%]  ">
          <Lottie
            animationData={Animation}
            style={{ height: "550px" }}
          ></Lottie>
        </div>
      </div>
    </div>
  )
}
