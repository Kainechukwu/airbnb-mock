/* eslint-disable tailwindcss/no-custom-classname */
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'swiper/css'

export default function SwiperSlider() {
  const imageLinks = [
    '/unsplash__YxDGcDm4Hs.png',
    '/unsplash_aDYXxGPZpLU.png',
    '/unsplash_bGIh_gn--tQ.png',
    '/unsplash_dUPfhP18dPI.png',
    '/unsplash_hBh9JbyeCtg.png'
  ]

  const swiperNavPrev = useRef()
  const swiperNavNext = useRef()

  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: swiperNavPrev.current,
        nextEl: swiperNavNext.current
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrev.current
        swiper.params.navigation.nextEl = swiperNavNext.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
    >
      {imageLinks.map((url) => (
        <SwiperSlide className="swiperSlide" key={url}>
          <img src={url} alt="image" />
        </SwiperSlide>
      ))}
      <div className="swiperNavPrev" ref={swiperNavPrev}></div>
      <div className="swiperNavNext" ref={swiperNavNext}></div>
    </Swiper>
  )

  /* <SwiperSlide className="swiperSlide" key={url}>
          <div className="relative h-36 w-full rounded-lg">
            <img src={url} alt="image" />
          </div>
        </SwiperSlide> */
}
