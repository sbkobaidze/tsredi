import React from "react"
import Card from "@geist-ui/core/esm/card/card"
import { Button, Text } from "@geist-ui/core"
import Image from "@geist-ui/core/esm/image/image"
import CardFooter from "@geist-ui/core/esm/card/card-footer"
import { Link } from "gatsby-plugin-react-i18next"
const BlogCard = ({ title, image, description, date, fileName }) => {
  return (
    <div className="card-1 m-4 ">
      <Card width="100%" hoverable>
        <Image src={image} height="200px" width="300px" draggable={false} />
        <Text h4 mb={0}>
          {title}
        </Text>
        <Text type="secondary" small>
          {description}
        </Text>
        <Text type="secondary" small>
          {date}
        </Text>
        <CardFooter>
          <Link to={"/blog/" + fileName}>Read more...</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogCard
