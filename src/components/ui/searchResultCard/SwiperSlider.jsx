/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'swiper/css'

export default function SwiperSlider({ imageUrls }) {
  // const imageUrls = [
  //   '/unsplash__YxDGcDm4Hs.png',
  //   '/unsplash_aDYXxGPZpLU.png',
  //   '/unsplash_bGIh_gn--tQ.png',
  //   '/unsplash_dUPfhP18dPI.png',
  //   '/unsplash_hBh9JbyeCtg.png'
  // ]

  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {imageUrls?.map((url) => (
        <SwiperSlide className="swiperSlide" key={url}>
          <img src={url} alt="image" />
        </SwiperSlide>
      ))}
    </Swiper>
  )

  /* <SwiperSlide className="swiperSlide" key={url}>
          <div className="relative h-36 w-full rounded-lg">
            <img src={url} alt="image" />
          </div>
        </SwiperSlide> */
}
