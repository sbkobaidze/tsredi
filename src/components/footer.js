import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full h-[20vh] max-[1300px]:h-[35vh]  p-10 dark:bg-black ">
      <div>
        <div className="   font-main flex  text-white justify-between ">
          <div className="logo-contact">
            <div className="name mr-10 text-2xl font-bold ">
              <a href="#main">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 100"
                  width={150}
                  height={50}
                >
                  <defs>
                    <style></style>
                  </defs>
                  <g>
                    <path
                      class="cls-5"
                      d="m148.59,39.05h-12.38v-7.71h155.41v7.71h-136.48v50.7h-6.55v-50.7Z"
                    />
                    <path
                      class="cls-5"
                      d="m171.64,88.15v-6.97c2.98,1.74,6.04,2.61,9.18,2.61,2.6,0,4.48-.46,5.65-1.38,1.17-.92,1.75-2.64,1.75-5.15,0-1.6-.25-2.87-.75-3.81-.5-.94-1.31-1.75-2.43-2.43-1.12-.68-2.8-1.45-5.05-2.32-3.33-1.31-5.67-2.96-7.02-4.97-1.35-2.01-2.02-4.78-2.02-8.31,0-4.16,1.01-7.39,3.03-9.69,2.02-2.3,4.97-3.45,8.85-3.45,1.7,0,3.34.18,4.93.54,1.59.36,2.88.81,3.87,1.34v6.97c-2.44-1.4-5.13-2.1-8.08-2.1-2.44,0-4.26.48-5.48,1.45-1.22.97-1.83,2.61-1.83,4.93,0,1.4.22,2.53.67,3.37.45.85,1.19,1.6,2.24,2.25,1.04.65,2.6,1.37,4.69,2.14,3.62,1.4,6.14,3.22,7.55,5.44,1.41,2.23,2.12,5.1,2.12,8.63,0,4.16-1.03,7.4-3.1,9.72-2.07,2.32-5.1,3.48-9.11,3.48s-7.23-.77-9.66-2.32Z"
                    />
                    <path
                      class="cls-5"
                      d="m198.61,43.02h14.23c3.37,0,5.87,1.31,7.5,3.92s2.45,6.29,2.45,11.03c0,3.34-.55,6.16-1.66,8.45-1.11,2.3-2.67,3.91-4.69,4.83.54.58.98,1.22,1.3,1.92.32.7.66,1.71,1.01,3.01l3.89,13.57h-5.38l-3.8-13.06c-.38-1.31-.83-2.21-1.35-2.72-.51-.51-1.33-.76-2.45-.76h-5.82v16.54h-5.24v-46.73Zm12.84,23.8c4.07,0,6.11-2.95,6.11-8.85s-1.87-8.78-5.62-8.78h-8.08v17.63h7.6Z"
                    />
                    <path
                      class="cls-5"
                      d="m227.94,43.02h21.59v6.17h-16.35v14.15h14.57v6.09h-14.57v14.22h16.35v6.09h-21.59v-46.73Z"
                    />
                    <path
                      class="cls-5"
                      d="m254.38,43.02h12.55c4.65,0,8.06,1.86,10.24,5.59,2.18,3.73,3.27,9.75,3.27,18.07s-1.09,13.82-3.27,17.52c-2.18,3.7-5.59,5.55-10.24,5.55h-12.55v-46.73Zm11.73,40.63c2.15,0,3.87-.47,5.17-1.41,1.3-.94,2.28-2.65,2.93-5.12.66-2.47.99-5.95.99-10.45s-.31-8.08-.91-10.59c-.61-2.51-1.56-4.29-2.86-5.33-1.3-1.04-3.07-1.56-5.31-1.56h-6.49v34.47h6.49Z"
                    />
                    <path
                      class="cls-5"
                      d="m285.58,43.02h5.24v46.73h-5.24v-46.73Z"
                    />
                  </g>
                  <g>
                    <g>
                      <g>
                        <polyline
                          class="cls-1"
                          points="137.51 74.22 119.32 74.22 128.6 74.22 128.6 9.74 60.2 9.74 60.2 90.48 128.6 90.48 128.51 81.05 133.63 81.03 123.28 81.03"
                        />
                        <g>
                          <path
                            class="cls-4"
                            d="m85.42,68.4c1.53,5.21.78,9.75,0,12.63l4.64,4.32h11.06l4.99-4.32c-.75-2.91-1.43-7.42,0-12.63,2.33-8.46,7.92-10.27,12.13-18.53,1.95-3.82,7.84-15.37,0-24.09-7.32-8.14-21.81-8.46-22.83-8.47-1.4-.01-15.06,0-22.48,7.41-9.45,9.46-1.36,23.58,0,25.94,4.46,7.78,10.09,9.56,12.49,17.74Z"
                          />
                          <line
                            class="cls-1"
                            x1="85.42"
                            y1="81.03"
                            x2="106.12"
                            y2="81.03"
                          />
                          <path class="cls-1" d="m86.3,75.02h18.98" />
                          <line
                            class="cls-1"
                            x1="85.42"
                            y1="68.4"
                            x2="106.12"
                            y2="68.4"
                          />
                        </g>
                      </g>
                      <ellipse
                        class="cls-3"
                        cx="101.43"
                        cy="34.92"
                        rx="9.94"
                        ry="7.37"
                      />
                    </g>
                    <polygon
                      class="cls-2"
                      points="87.8 81.89 90.62 84.42 100.72 84.42 103.54 81.89 87.8 81.89"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div className="flex flex-col pt-1">
              <div className="ml-[23px] font-main font-semibold">
                contact@tsredi.com
              </div>
              <div className="flex items-center  ml-[23px] w-full mt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100090480311654"
                  target="_blank"
                >
                  {" "}
                  <FaFacebook className="mr-1" size={20} />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/90939483"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin className="mr-1" size={20} />
                </a>
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
