import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { useModal, Modal } from "@geist-ui/core"
import { MdOpenInNew } from "react-icons/md"

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
        className="projectscard relative border-white border-2 border-b-0 w-full sm:w-[200px] h-[300px] font-main flex flex-col gap-3 text-white aspect-[1/1.6] hid  "
      >
        <div className="card-content">
          <h3 className="text-3xl">{card.projectheader.text.toUpperCase()}</h3>
          <div className="w-[100%]  pointer-events-none">
            {card.minidescription.text}
          </div>
          <div className="absolute top-0 right-0">
            <a
              href={card.link.url}

              target="_blank"
              className="underline text-xl hover:text-[#cbccc6] "
            >
              <MdOpenInNew size={30} />
            </a>
          </div>
          <div className="readmore absolute bottom-5 flex flex-col">
            <a
              auto
              onClick={() => setVisible(true)}
              className="underline text-xl hover:text-[#cbccc6] "
            >
              {slice.primary.button.text}
            </a>
            <Modal {...bindings}>
              <Modal.Title>{card.projectheader.text.toUpperCase()}</Modal.Title>
              <Modal.Content>
                <p>{card.modaldescription.text}</p>
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
    <div className="bg-secondary w-full h-min-[70vh] font-main ">
      <div className=" w-[80%]  m-auto">
        <div className="w-full  bg-[linear-gradient(90deg,#6E45E1,#89D4CF)] rounded-xl flex-col pt-5 ">
          <div className="header text-white text-5xl sm:text-4xl pb-10 px-10 uppercase font-semibold ">
            <h1>{slice.primary.header.text}</h1>
          </div>

          <motion.div className="carousel  w-[100%] max-h-[30%] m-auto   overflow-hidden  ">
            <motion.div
              ref={ref}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className=" flex gap-12  cursor-grab w-full max-h-[30%]  items-center   "
            >
              {projectCards}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
