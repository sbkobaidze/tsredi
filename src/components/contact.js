import React, { useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState, forwardRef } from "react"
import { Canvas } from "@react-three/fiber"
import Starbackground from "./3d/Starbackground"

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
      className="spacer layer2 h-[90vh] 2xl:h-[75vh] relative  dark:bg-black w-full "
      ref={ref}
      id="contact"
    >
      <Canvas className="absolute ">
        <Starbackground />
      </Canvas>
      <div class=" custom-shape-divider-top-1673962769">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className=" shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="input absolute h-[auto] max-[640px]:h-[auto]  backdrop-blur  rounded-xl top-[22%] p-2 w-[50vw] max-[640px]:w-[80vw]  border-2 border-white">
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
