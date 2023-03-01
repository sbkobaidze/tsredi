import React, { useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState, forwardRef } from "react"
import { Canvas } from "@react-three/fiber"
import Starbackground from "./Animations/Starbackground"

import { useTranslation } from "gatsby-plugin-react-i18next"

const Contact = forwardRef((_, ref) => {
  const { t } = useTranslation()

  function checkForm() {
    if (
      document.getElementById("inputName").value &&
      document.getElementById("inputEmail").value &&
      document.getElementById("subject").value &&
      document.getElementById("text").value
    ) {
      notify("Email Sent!")
    } else {
      notify("Fill Out The Form!")
    }
  }
  const notify = e => toast(e)

  const [loaded, isLoading] = useState(false)
  useEffect(() => {
    isLoading(true)
  })
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_54ns71d",
        "service_54ns71d",
        form.current,
        "FhRMTu902bGRHUPc3"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div
      className="spacer layer2 h-[100vh]  max-[900px]:h-[70vh] relative  dark:bg-black w-full "
      ref={ref}
      id="contact"
    >
      <Canvas className="absolute ">
        <Starbackground />
      </Canvas>
      <div className="custom-shape-divider-top-1677344202">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="input absolute h-[auto]   backdrop-blur  rounded-xl top-[22%] p-2 w-[50vw] max-[640px]:w-[90vw]  border-2 border-white">
          <h1 className="text-white text-3xl font-main font-semibold text-center my-5  max-[900px]:my-2 ">
            {t("contact.header")}
          </h1>
          <form
            className="flex flex-col px-10 max-[640px]:text-sm"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className=" rounded-md h-10 max-[900px]:m-2  m-3 p-2"
              type="text"
              placeholder={t("contact.name")}
              id="inputName"
              required
            />
            <input
              className=" rounded-md h-10 max-[900px]:m-2 m-3 p-2"
              type="text"
              placeholder={t("contact.email")}
              id="inputEmail"
              required
            />
            <input
              className=" rounded-md h-10 max-[900px]:m-2 m-3 p-2"
              type="text"
              placeholder={t("contact.subject")}
              id="subject"
              required
            />

            <textarea
              className=" rounded-md h-20 max-[900px]:h-20 m-3 max-[900px]:m-2 p-2"
              placeholder={t("contact.message")}
              required
              id="text"
            ></textarea>
            <input
              type="submit"
              className="text-white bg-[linear-gradient(135deg,#FFDD00,#Fbb034)] rounded-md h-10 m-3 text-center font-main font-semibold cursor-pointer resize-none	"
              placeholder={t("contact.submit")}
              onClick={() => checkForm()}
            ></input>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
})

export default Contact
