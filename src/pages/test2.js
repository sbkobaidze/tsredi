// import * as React from "react"
// import { graphql } from "gatsby"
// import Footer from "../components/footer"
// import Copyright from "../components/copyright"
// //blog
// import BlogStory from "../components/blog/page/blogstory"
// import PopularBlogArticles from "../components/blog/blogpage/popularblogarticles"
// import Articles from "../components/blog/page/articles"

// const Page = ({ data }) => {
//   if (!data) return null
//   //Every blog
//   const blogsArray = data.allPrismicBlog.nodes
//   //Current blog
//   const document = data.prismicBlog

//   const lang = document.lang
//   const altLang = document.alternate_languages

//   //current blog id

//   const blogId = document.uid
//   //Blog hero content
//   const title = document.data.blogtitle.raw[0].text
//   const heroImage = document.data.blogimage

//   //blogtext
//   const blogParagraph = document.data.text.html

//   //Author
//   const authorName = document.data.author.text
//   const authorImage = document.data.authorpic.url
//   const authorSocialMedia = document.data.authorsocialmedia.url

//   //date
//   const blogWriteDate = document.data.date

//   return (
//     <div className="bg-[linear-gradient(135deg,#330867,#31a7bb)]  dark:bg-black border-1">
//       <Articles title={title} image={heroImage.url} imageAlt={heroImage.alt} />
//       <BlogStory
//         paragraph={blogParagraph}
//         author={[authorName, authorImage, authorSocialMedia]}
//         date={blogWriteDate}
//       />
//       <PopularBlogArticles
//         currentBlog={blogId}
//         everyBlog={blogsArray}
//         lang={document.lang}
//       />
//       <Footer />
//       <Copyright />
//     </div>
//   )
// }

// export const query = graphql`
//   query MyQuery($id: String, $lang: String) {
//     prismicBlog(id: { eq: $id }, lang: { eq: $lang }, data: {}) {
//       id
//       lang
//       alternate_languages {
//         lang
//         id
//         type
//         uid
//       }
//       uid
//       data {
//         author {
//           text
//           html
//         }
//         blogtitle {
//           raw
//         }
//         blogimage {
//           alt
//           url
//         }
//         date
//         text {
//           html
//         }
//         authorpic {
//           url
//           alt
//         }
//         authorsocialmedia {
//           url
//         }
//       }
//     }

//     allPrismicBlog {
//       nodes {
//         uid
//         data {
//           blogimage {
//             url
//           }
//           blogtitle {
//             text
//           }
//           date
//         }
//         lang
//       }
//     }
//   }
// `

// export default Page
