import React, { useEffect, useState } from "react"
import { Button, Text } from "@geist-ui/core"

import BlogCard from "../page/blogcard"

const BlogCardsContainer = ({ blogData }) => {
  const [btnDisabled, changeDisabled] = useState(true)

  const [blogShow, showMoreBlogs] = useState(3)

  useEffect(() => {
    const checkBtn = () => {
      if (blogData.length < 3) {
        changeDisabled(true)
      } else {
        changeDisabled(false)
      }
    }
    checkBtn()
  }, [])
  const showMore = () => {
    if (blogData.length < 3) {
      changeDisabled(true)
    } else {
      changeDisabled(false)

      showMoreBlogs(blogShow + 3)
    }
  }

  return (
    <div className="h-auto bg-secondary  w-full font-main ">
      <div className="w-[90%] m-auto">
        <h1 className="font-semibold text-4xl p-4">RECENT POSTS</h1>
        <div className="card container  flex justify-center flex-wrap ">
          {blogData.slice(0, 3).map(blog => {
            return (
              <BlogCard
                key={blog.id}
                title={blog.title}
                date={blog.writeDate}
                fileName={blog.slug}
                image={blog.blogHeroImage.publicUrl}
              />
            )
          })}
        </div>
        <h1 className="font-semibold text-4xl p-4">ALL </h1>
        <div className="w-[90%] m-auto">
          <div className="card container   flex  flex-wrap ">
            {blogData.slice(3, blogShow).map(blog => {
              return blog
            })}
          </div>
          <div className="flex w-full justify-center">
            <Button disabled={btnDisabled} onClick={showMore}>
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCardsContainer
