import React, { lazy, Suspense, useEffect, useState } from "react"
import { Button } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Starbackground from "./3d/Starbackground"
import { useTranslation } from "gatsby-plugin-react-i18next"
const Rock2 = lazy(() => import("./3d/Cosmonaut"))

const Hero = ({ reffed }) => {
  const { t } = useTranslation()
  const scrollToContact = () => {
    reffed.current.scrollIntoView({ behavior: "smooth" })
  }
  const [loaded, isLoaded] = useState(false)
  useEffect(() => {
    isLoaded(true)
  }, [])

  return (
    <div>
      <div className=" w-full h-screen dark:bg-black   ">
        <Canvas className="absolute ">
          <Starbackground />
        </Canvas>
        <div className="w-[80%] h-100%  absolute mx-auto right-0 left-0 top-[30%] z-10 ">
          <div className="relative">
            <div className="text-white text-5xl font-main font-semibold z-20 absolute">
              <h1 className="mb-3  " id="canvas3d">
                {t("hero.text1")}
              </h1>
              <h1 className="text-neongreen mb-3"> {t("hero.text2")}</h1>
              <Button
                sx={{ color: "white", fontWeight: "bold" }}
                className="bg-gradient-to-r from-neongreen  dark:to-main to-button  font-main  w-32 h-10 border-3"
                onClick={scrollToContact}
              >
                {t("hero.button")}
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-[50%] max-[640px]:w-[100%] max-[640px]:right-0 absolute right-20 top-[20%]">
          <Canvas camera={{ position: [-15, 5, 25] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[-5, 2, 2]} intensity={1} />
            {!loaded ? null : (
              <Suspense fallback={null}>
                <Rock2 />
              </Suspense>
            )}
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Hero
