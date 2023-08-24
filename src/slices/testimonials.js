import React from "react"
import { MdFormatQuote } from "react-icons/md"
import User from "@geist-ui/core/esm/user/user"
import UserLink from "@geist-ui/core/esm/user/user-link"

export const Testimonials = ({ slice }) => {
  const testimonialCards = slice.items.map(testimonial => {
    return (
      <div
        className="card bg-[linear-gradient(90deg,#6E45E1,#89D4CF)] rounded-xl  box-shadow-black w-[49%] sm:w-[100%]  sm:h-[48%] min-h-[100%] flex flex-col p-4 my-4 relative"
        id="testimonials"
      >
        <div className="quotes">
          <MdFormatQuote size={80} style={{ color: "white" }} />
        </div>
        <div className="text min-h-[40%]">
          <p className="font-normal text-white text-normal">
            {testimonial.testimonial.text}
          </p>
        </div>
        <div className="testimonial-author pt-3">
          <User
            name={testimonial.name.text}
            className="authorcreds"
            style={{ color: "white" }}
          >
            <UserLink href={testimonial.brandlink.url} className="text-black">
             <p className="text-white"> {"@" + testimonial.brand.text}</p>
            </UserLink>
          </User>
        </div>
      </div>
    )
  })

  return (
    <div className="w-full h-[auto] bg-secondary py-20 font-main  ">
      <div className="header text-center w-[80%] m-auto">
        <h2 className="text-4xl py-5 font-semibold text-textcolor">
          {slice.primary.header.text}
        </h2>
      </div>
      <div className="flex w-[80%] h-full m-auto justify-between sm:flex-col flex-wrap hid ">
        {testimonialCards}
      </div>
    </div>
  )
}
