import React from "react"
import { Button } from "@mui/material"

import { useTranslation } from "gatsby-plugin-react-i18next"
import Animation from "./Animations/aboutAnimation.json"
import Lottie from "lottie-react"
const Hero = ({ reffed }) => {
  const { t } = useTranslation()
  const scrollToContact = () => {
    reffed.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <div className=" w-full h-[100vh] dark:bg-black relative   ">
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

        <div className=" h-100%  w-[80%] max-[640px]:left-[30%] max-[640px]:top-[15%] absolute mx-auto right-0 left-0 top-[25%] z-10 ">
          <div className="text-white text-7xl  max-[900px]:w-[230px] max-[640px]:text-6xl font-main font-semibold z-20 absolute">
            <h1 className="mb-3  " id="canvas3d">
              {t("hero.text1")}
            </h1>
            <h1 className="dark:text-[#8A2BE2] text-neongreen  mb-1">
              {" "}
              {t("hero.text2")}
            </h1>
            <Button
              sx={{ color: "white", fontWeight: "bold" }}
              className="bg-[linear-gradient(135deg,#FFDD00,#Fbb034)]   font-main  w-60 h-16 border-3"
              onClick={scrollToContact}
            >
              {t("hero.button")}
            </Button>
          </div>
        </div>
        <div className="h-[500px] w-[50%] max-[640px]:w-[100%] max-[640px]:right-0 max-[640px]:top-[40%]    absolute  right-20 ">
          <Lottie
            animationData={Animation}
            style={{ height: "600px" }}
          ></Lottie>
        </div>
      </div>
    </div>
  )
}

export default Hero
