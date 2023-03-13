import React from "react"
import Card from "@geist-ui/core/esm/card/card"
import { Text } from "@geist-ui/core"
import Image from "@geist-ui/core/esm/image/image"
import CardFooter from "@geist-ui/core/esm/card/card-footer"
import { navigate } from "gatsby"
import { defaultLanguage } from "../../../prismic-config"

const BlogCard = ({ title, image, date, uid, lang }) => {
  const handleChange = e => {
    if (lang === defaultLanguage) {
      navigate(`/blog/${uid}`)
    } else {
      navigate(`/${lang.slice(0, lang.indexOf("-"))}/blog/${uid}`)
    }
  }
  return (
    <div className="card-1 m-4 ">
      <Card width="100%" hoverable>
        <Image src={image} height="200px" width="300px" draggable={false} />
        <Text h4 mb={0}>
          {title}
        </Text>
        <Text type="secondary" small>
          {date}
        </Text>

        <CardFooter>
          <p onClick={handleChange}>Read more...</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogCard
