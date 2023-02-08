import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Services = () => {
  const { t } = useTranslation()
  return (
    <div
      className="  max-[800px]:h-[100%] w-full bg-secondary relative   "
      id="services"
    >
      <div className=" text-center  w-auto font-main font-semibold text-5xl text-textcolor pt-10 mx-24 max">
        <h1 className="w-full">{t("services.header")}</h1>
      </div>
      <div className=" w-full h-full   max-[640px]:h-auto  flex justify-center  flex-wrap  pt-10 max-[500px]:mx-0 max-[900px]:pt-5 max-[1000px]:h-[80%]	">
        <div className="w-[350px] max-[550px]:w-[280px] h-20  z-20 relative bg-button   rounded-md m-3 backdrop-blur  shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center  pl-3   	">
            <h1 className="text-white text-2xl font-main font-semibold ">
              UX/UI Design
            </h1>
          </div>
        </div>
        <div className="w-[350px] max-[550px]:w-[280px] h-20 z-20 relative bg-button   rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex pl-3 items-center">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              Social Media Marketing
            </h1>
          </div>
        </div>
        <div className="w-[350px] max-[550px]:w-[280px]  h-20  z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              Search Engine Marketing
            </h1>
          </div>
        </div>{" "}
        <div className="w-[350px] h-20 max-[550px]:w-[280px] z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              SEO
            </h1>
          </div>
        </div>
        <div className="w-[350px] h-20 max-[550px]:w-[280px] z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              Web Development
            </h1>
          </div>
        </div>
        <div className="w-[350px] h-20 max-[550px]:w-[280px]  z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              App Development
            </h1>
          </div>
        </div>
        <div className="w-[350px] h-20 max-[550px]:w-[280px]  z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              Blockchain Development
            </h1>
          </div>
        </div>
        <div className="w-[350px] h-20 max-[550px]:w-[280px]  z-20 relative bg-button    rounded-md m-3 backdrop-blur shadow-2xl hover:shadow-neongreen">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-main dark:from-black dark:to-main to-button rounded-lg flex items-center pl-3">
            <h1 className="text-white text-2xl font-main font-semibold  ">
              Email Marketing
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
