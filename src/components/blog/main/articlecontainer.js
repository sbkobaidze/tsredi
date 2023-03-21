import React, { useEffect, useState } from "react"
import { Button } from "@geist-ui/core"

import BlogCard from "../blogcard"

const ArticleContainer = ({ pageHeader, blogData, currentLang }) => {
  const [btnDisabled, changeDisabled] = useState(true)

  const [blogShow, showMoreBlogs] = useState(3)

  const currentLangBlogs = []

  blogData.forEach(blog => {
    if (blog.lang === currentLang) {
      currentLangBlogs.push(blog)
    }
  })

  useEffect(() => {
    const checkBtn = () => {
      if (currentLangBlogs.length < 3) {
        changeDisabled(true)
      } else {
        changeDisabled(false)
      }
    }
    checkBtn()
  }, [currentLangBlogs])

  //load more blogs
  const showMore = () => {
    if (currentLangBlogs.length < 3) {
      changeDisabled(true)
    } else {
      changeDisabled(false)

      showMoreBlogs(blogShow + 3)
    }
  }

  return (
    <div className="h-auto bg-secondary  w-full font-main ">
      <div className="w-[90%] m-auto">
        <h1 className="font-semibold text-4xl p-4">{pageHeader}</h1>
        <div className="card container  flex justify-center flex-wrap ">
          {currentLangBlogs.slice(0, 3).map(blog => {
            return (
              <div className="w-[400px]">
                <BlogCard
                  key={blog.id}
                  title={blog.data.blogtitle.text}
                  date={blog.data.date}
                  uid={blog.uid}
                  image={blog.data.blogimage.url}
                  lang={currentLang}
                />
              </div>
            )
          })}
        </div>
        <h1 className="font-semibold text-4xl p-4">ALL </h1>
        <div className="w-[90%] m-auto">
          <div className="card container   flex  flex-wrap ">
            {/* {blogData.slice(3, blogShow).map(blog => {
              return blog
            })} */}
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

export default ArticleContainer
