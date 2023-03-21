import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const Brands = ({ slice }) => {
  const brandLogos = slice.items.map(item => {
    return (
      <div className="w-[200px] mx-4 cursor-pointer">
        <a href={item.link.url} target="_blank" rel="noreferrer">
          <GatsbyImage
            image={item.logo.gatsbyImageData}
            alt={item.logo.alt}
          ></GatsbyImage>
        </a>
      </div>
    )
  })

  return (
    <div className="w-full bg-secondary h-auto" id="brands">
      <div className="font-semibold text-4xl text-center text-textcolor font-main mx-6 max-[800px]:mx-0 py-3 tracking-[4px] max-[640px]:text-2xl max-[900px]:text-3xl">
        <h2>{slice.primary.eyebrow_headline.text}</h2>
      </div>
      <div className="flex w-[80%] m-auto justify-center">{brandLogos}</div>
    </div>
  )
}
