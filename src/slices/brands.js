import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper"
import { GatsbyImage } from "gatsby-plugin-image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

export const Brands = ({ slice }) => {
  const brandLogos = slice.items.map(item => {
    return (
      <SwiperSlide>
        <a href={item.link.url} target="_blank">
          <GatsbyImage
            image={item.logo.gatsbyImageData}
            alt={item.logo.alt}
          ></GatsbyImage>
        </a>
      </SwiperSlide>
    )
  })

  return (
    <div className="w-full bg-secondary h-auto" id="brands">
      <div className="font-semibold text-4xl text-center text-textcolor font-main mx-6 max-[800px]:mx-0 py-3 tracking-[4px] max-[640px]:text-2xl max-[900px]:text-3xl">
        <h2>{slice.primary.eyebrow_headline.text}</h2>
      </div>
      <div className="diper  flex  flex-wrap  mt-2 justify-center">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          loop={true}
          grabCursor={true}
          loopFillGroupWithBlank={true}
          spaceBetween={5}
          slidesPerView={4}
          centeredSlides={true}
          breakpoints={{
            // when window width is >= 640px

            301: {
              slidesPerView: 2,
            },
            901: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
          }}
          style={{
            "--swiper-pagination-color": "#1E1E1E",
            "--swiper-pagination-bullet-inactive-color": "#FFF",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "0px",
          }}
          speed={4000}
          autoplay={{
            disableOnInteraction: false,
          }}
        >
          {brandLogos}
        </Swiper>
      </div>
    </div>
  )
}
