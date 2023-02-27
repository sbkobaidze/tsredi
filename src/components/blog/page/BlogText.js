import React from "react"
import NewsletterCard from "../main/NewsletterCard"
import { ToastContainer } from "react-toastify"
import { Button } from "@geist-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BlogText = ({ text, image }) => {
  const regex = /(?<=<p>)(.*?)(?=<\/p>)/g
  const array = [...text.matchAll(regex)]
  const blogHeader = text.match(/(?<=<h2>)(.*?)(?=<\/h2>)/)
  console.log(image)

  return (
    <div className="w-full  relative bg-secondary ">
      <ToastContainer />
      <div className="flex justify-center ">
        <div className="sticky w-[40%] max-[640px]:w-[80%] ">
          <NewsletterCard />
        </div>
      </div>
      <div className="w-[90%] m-auto font-main mt-20 leading-10 ">
        <div className="w-[70%] max-[640px]:w-[100%]">
          <div className="pretext ">
            <p className="text-2xl 	">{}</p>
          </div>
          <div className="post-start">
            <div className="heading my-8">
              <h2 className="text-5xl font-semibold">{blogHeader[0]}</h2>
            </div>
            <div className="post-1 text-2xl">
              {array.map(post => {
                return <p className="my-10">{post}</p>
              })}
            </div>
            <div className="img">
              <img src={image} alt="Tsredi Bulb - Marketing"></img>
            </div>
          </div>
        </div>
        <div className="next-article flex justify-center">
          <Link to="blog2">
            <Button
              style={{
                margin: "10px 0",
                backgroundColor: "#Fbb034",
                color: "white",
              }}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogText
