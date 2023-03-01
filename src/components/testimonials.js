import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { MdFormatQuote } from "react-icons/md"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Testimonials = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="spacer-2 relative h-[60vh] w-full bg-secondary ">
        <div className="header w-full flex absolute justify-center  text-textcolor z-30 top-[20%] max-[900px]:top-[15%] text-5xl font-main font-semibold">
          <h1>
            <MdFormatQuote size={80} />
          </h1>
        </div>

        <div className="test-swiper absolute w-[100%]  bottom-0 h-[75%]  flex items-center px-32 max-[900px]:px-0 font-main text-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            autoplay={{ delay: "2000" }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            style={{
              "--swiper-pagination-color": "#1E1E1E",
              "--swiper-pagination-bullet-inactive-color": "#FFF",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bottom": "0px",
            }}
          >
            <SwiperSlide>
              {t("testimonials.test1")}
              <p className="mt-5 underline italic">M. Burduli - GudaurMsheni</p>
            </SwiperSlide>
            <SwiperSlide>
              {t("testimonials.test2")}

              <p className="mt-5 underline italic">
                D. Maisuradze - CryptoSpace
              </p>
            </SwiperSlide>
            <SwiperSlide>
              {t("testimonials.test3")}

              <p className="mt-5 underline italic">S. Adamsburg</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
