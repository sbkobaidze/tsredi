import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full h-[20vh] max-[1300px]:h-[30vh]  p-10 dark:bg-black ">
      <div>
        <div className="   font-main flex  text-white justify-between ">
          <div className="logo-contact">
            <div className="name mr-10 text-2xl font-bold ">tsredi</div>
            <div className="flex flex-col pt-1">
              <div classsName="contact text-md font-semibold ">
                contact@tsredi.com
              </div>
              <div className="flex items-center w-full mt-2">
                <FaFacebook className="mr-1" size={20} />
                <FaLinkedin className="mr-1" size={20} />
                <FaInstagram className="mr-1" size={20} />
              </div>
            </div>
          </div>
          <div className="links text-md pt-1">
            <ul>
              <a href="#about">
                <li className="mx-2 ">{t("header.about")}</li>
              </a>
              <a href="#services">
                <li className="mx-2">{t("header.services")}</li>
              </a>
              <a href="#contact">
                {" "}
                <li className="mx-2">{t("header.contact")}</li>
              </a>
              <a href="#career">
                {" "}
                <li className="mx-2">{t("header.careers")}</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
