import React from "react"
import { ToastContainer } from "react-toastify"
import { Link } from "gatsby"
import User from "@geist-ui/core/esm/user/user"
import Subscribe from "../subscribe"

const BlogStory = ({
  paragraph,
  author,
  authorSocialMedia,
  authorImage,
  date,

  newsletter,
}) => {
  //Blog Paragraph
  const blogText = (
    <div className="post-1 text-2xl ">
      <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
    </div>
  )

  //Author Info
  const authorInfo = (
    <div className="author-date  ">
      <Link to={authorSocialMedia} target="_blank">
        <User name={author} scale={2}></User>
      </Link>
      <p className="block ml-4 ">{date}</p>
    </div>
  )

  return (
    <div className="w-full  relative bg-secondary ">
      <ToastContainer />
      <div className="flex justify-center ">
        <div className="sticky w-[40%] sm:w-[80%] ">
          <Subscribe newsLetterData={newsletter} />
        </div>
      </div>
      <div className="w-[90%] m-auto font-main mt-20 leading-10 ">
        <div className="w-[70%] sm:w-[100%]">
          <div className="post-start">{blogText}</div>
          {authorInfo}
        </div>
      </div>
    </div>
  )
}

export default BlogStory
