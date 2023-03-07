import React from "react"
import { Button } from "@mui/material"
import Animation from "../components/Animations/aboutAnimation.json"
import Lottie from "lottie-react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@react-three/fiber"
import Starbackground from "../components/Animations/Starbackground"

export const Hero = ({ reffed, slice }) => {
  const heroData = slice.primary

  const scrollToContact = () => {
    reffed.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full h-[100vh] dark:bg-black  sm:h-[90vh]">
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
        <div className="text-white text-7xl top-[20%]  font-main font-semibold z-20 absolute left-0  sm:top-[10%] sm:text-6xl">
          <h1 className="mb-3 text-5xl " id="canvas3d">
            {heroData.header.text}
          </h1>
          <h1 className="dark:text-[#8A2BE2] text-neongreen  my-2 text-5xl">
            {" "}
            {heroData.description.text}
          </h1>
          <Button
            sx={{ color: "white", fontWeight: "bold" }}
            className="bg-[linear-gradient(135deg,#FFDD00,#Fbb034)]  my-2 font-main  w-60 h-16 border-3"
            onClick={scrollToContact}
          >
            {heroData.button.text}
          </Button>
        </div>
        <div className="h-[500px] w-[50%]  top-[10%]   right-0  absolute sm:translate-y-[250px] sm:w-[100%]  ">
          <Lottie
            animationData={Animation}
            style={{ height: "550px" }}
          ></Lottie>
        </div>
      </div>
    </div>
  )
}
