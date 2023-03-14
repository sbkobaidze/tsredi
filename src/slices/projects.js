import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { useModal, Modal } from "@geist-ui/core"

export const Projects = ({ slice }) => {
  const [width, changeWidth] = useState()

  const { visilbe, setVisible, bindings } = useModal()

  useEffect(() => {
    changeWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  })


  const ref = useRef()
  const projectCards = slice.items.map((card, index) => {
    return (
      <motion.div
        key={index}
        className="projectscard relative  min-w-[300px] h-[80%] font-main flex flex-col gap-3 text-white aspect-[1/1.6] rounded-xl "
      >
        <div className="card-content">
          <h3 className="text-3xl">{card.projectheader.text.toUpperCase()}</h3>
          <p className="text-normal"> {card.minidescription.text}</p>
          <div className="w-[100%]  pointer-events-none">
            <img
              src={card.img.url}
              alt=""
              className=" xl:max-h-[100px] w-full max-h-[150px]"
            ></img>
          </div>
          <div className="link absolute bottom-10 flex flex-col">
            <Link
              to={card.link.url}
              target="_blank"
              className="underline text-xl hover:text-[#cbccc6] "
            >
              VIEW
            </Link>
            <a
              auto
              onClick={() => setVisible(true)}
              className="underline text-xl hover:text-[#cbccc6] "
            >
              READ MORE
            </a>
            <Modal {...bindings}>
              <Modal.Title>{card.projectheader.text.toUpperCase()}</Modal.Title>
              <Modal.Content>
                <p>
                  An open-source design system for building modern websites and
                  applications. An open-source design system for building modern
                  websites and applications. An open-source design system for
                  building modern websites and applications.{" "}
                </p>
              </Modal.Content>
              <Modal.Action passive onClick={() => setVisible(false)}>
                Cancel
              </Modal.Action>
            </Modal>
          </div>
        </div>
      </motion.div>
    )
  })
  return (
    <div className="bg-secondary w-full">
      <motion.div>
        <h3 className="text-4xl text-center font-semibold text-textcolor">
          {slice.primary.header.text}
        </h3>
      </motion.div>
      <motion.div className="carousel  w-[80%] m-auto h-[60vh]  overflow-hidden  ">
        <motion.div
          ref={ref}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className=" flex gap-12  cursor-grab w-full h-full items-center  p-5 px-10 "
        >
          {projectCards}
        </motion.div>
      </motion.div>
    </div>
  )
}
