import React, { lazy, useState, useEffect, Suspense } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
const Rock2 = lazy(() => import("./3d/Cosmonaut"))

const About = () => {
  const { t } = useTranslation()
  const [loaded, isLoaded] = useState(false)
  useEffect(() => {
    isLoaded(true)
  }, [])
  return (
    <div
      className=" h-[auto]   bg-secondary relative flex items-center"
      id="about"
    >
      <div className=" w-[80%]  m-[auto] bg-[linear-gradient(90deg,#6E45E1,#89D4CF)]  h-[auto] flex  max-[900px]:flex-col  max-[900px]:h-[80%] rounded-2xl max-[900px]:overflow-y-scroll ">
        <div className="img w-[50%]    max-[900px]:w-[100%]  h-[auto] p-10  ">
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
        <div className="about-text w-[60%]  max-[900px]:w-[100%]  font-main font-normal text-white p-10 max-[900px]:pt-0 ">
          <h2 className="text-5xl font-semibold max-[900px]:text-2xl mb-5">
            {t("about.header")}
          </h2>
          <p>{t("about.text")}</p>
        </div>
      </div>
    </div>
  )
}

export default About
