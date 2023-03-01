import React, { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { Button } from "@geist-ui/core"
import { Link } from "gatsby"
import User from "@geist-ui/core/esm/user/user"
import NewsLetterCard from "../main/newslettercard"

const BlogStory = ({
  blogCount,
  paragraph,
  writeDate,
  author,
  blogSlug,
  authorSocialMedia,
  authorPic,
}) => {
  const [nextPage, changeNextPage] = useState("/blog/")

  useEffect(() => {
    //next blog page
    for (let blog of blogCount) {
      if (blog.slug === blogSlug) {
        let blogIndex = blogCount.indexOf(blog)
        if (blogCount[blogIndex + 1] === undefined) {
        } else {
          changeNextPage(nextPage + blogCount[blogIndex + 1].slug)
        }
      }
    }
  }, [])

  return (
    <div className="w-full  relative bg-secondary ">
      <ToastContainer />
      <div className="flex justify-center ">
        <div className="sticky w-[40%] max-[640px]:w-[80%] ">
          <NewsLetterCard />
        </div>
      </div>
      <div className="w-[90%] m-auto font-main mt-20 leading-10 ">
        <div className="w-[70%] max-[640px]:w-[100%]">
          <div className="post-start">
            <div className="post-1 text-2xl">
              <div dangerouslySetInnerHTML={{ __html: paragraph }}></div>
            </div>
            <div className="author-date  ">
              {" "}
              <Link to={authorSocialMedia} target="_blank">
                <User name={author} src={authorPic} scale={2}></User>
              </Link>
              <p className="block ml-4">
                {writeDate.slice(0, writeDate.indexOf("T"))}
              </p>
            </div>
          </div>
        </div>
        <div className="next-article flex justify-center">
          <Link to={nextPage}>
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

export default BlogStory
