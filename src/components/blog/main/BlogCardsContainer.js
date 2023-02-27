import React, { useState } from "react"
import Card from "@geist-ui/core/esm/card/card"
import { Button, Text } from "@geist-ui/core"
import Image from "@geist-ui/core/esm/image/image"
import CardFooter from "@geist-ui/core/esm/card/card-footer"
import { Link } from "gatsby-plugin-react-i18next"

const BlogCardsContainer = data => {
  const blogArray = data.data.nodes

  const [btnDisabled, changeDisabled] = useState(true)

  const [blogShow, showMoreBlogs] = useState(3)
  const showMore = () => {
    if (blogArray.length < 3) {
      changeDisabled(true)
    } else {
      showMoreBlogs(blogShow + 3)
    }
  }

  return (
    <div className="h-auto bg-secondary  w-full font-main ">
      <div className="w-[90%] m-auto">
        <h1 className="font-semibold text-4xl p-4">RECENT POSTS</h1>
        <div className="card container  flex justify-center flex-wrap ">
          {blogArray.map((blogContent, index) => {
            return (
              <div className="card-1 m-4 " key={blogContent.frontmatter.id}>
                <Card width="100%" hoverable>
                  <Image
                    src={blogContent.frontmatter.heroImage}
                    height="200px"
                    width="300px"
                    draggable={false}
                  />
                  <Text h4 mb={0}>
                    Geist UI React
                  </Text>
                  <Text type="secondary" small>
                    {blogContent.frontmatter.description}
                  </Text>
                  <Text>{blogContent.frontmatter.date}</Text>
                  <CardFooter>
                    <Link
                      to={"/blog/" + blogContent.frontmatter.fileName}
                      className="text-main"
                    >
                      Read more...
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </div>
        <h1 className="font-semibold text-4xl p-4">ALL </h1>
        <div className="w-[90%] m-auto">
          <div className="card container   flex  flex-wrap ">
            {blogArray.slice(3, blogShow).map(blog => {
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
