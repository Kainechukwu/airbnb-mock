/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect } from 'react'

import { PiTreePalm } from 'react-icons/pi'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { IoHomeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { PiCastleTurretLight } from 'react-icons/pi'
import { IoSnowOutline } from 'react-icons/io5'
import { PiCampfire } from 'react-icons/pi'
import { RiLandscapeLine } from 'react-icons/ri'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
// import 'swiper/css/pagination'

import 'swiper/css'

export default function FilterSlider() {
  const navigate = useNavigate()

  const [filterQuery, setFilterQuery] = useState('design')
  const links = [
    {
      title: 'Design',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Tropical',
      icon: <PiTreePalm />
    },
    {
      title: 'Earth homes',
      icon: <IoHomeOutline />
    },
    {
      title: 'Castles',
      icon: <PiCastleTurretLight />
    },
    {
      title: 'Arctic',
      icon: <IoSnowOutline />
    },
    {
      title: 'Camp',
      icon: <PiCampfire />
    },
    {
      title: 'Islands',
      icon: <RiLandscapeLine />
    },
    {
      title: 'Lakefronts',
      icon: <PiTreePalm />
    },
    {
      title: 'Theme homes',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Jungle vibes',
      icon: <PiTreePalm />
    },
    {
      title: 'Village homes',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'OMG!',
      icon: <PiTreePalm />
    },
    {
      title: 'Oceanic homes',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Rapid springs',
      icon: <PiTreePalm />
    },
    {
      title: 'City',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Country',
      icon: <PiTreePalm />
    },
    {
      title: 'Pines',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'New',
      icon: <PiTreePalm />
    },
    {
      title: 'Rooms',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Cabins',
      icon: <PiTreePalm />
    },
    {
      title: 'Bed & breakfast',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Iconic',
      icon: <PiTreePalm />
    }
  ]

  const handleSelect = (linkTitle) => {
    setFilterQuery(linkTitle)
  }

  useEffect(() => {
    navigate(`/?tag=${filterQuery}`)
  }, [filterQuery, navigate])

  return (
    <Swiper
      className="filterSwiper"
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={9}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {links.map((link) => (
        <SwiperSlide className="filterSwiperSlide" key={link.title}>
          <div
            onClick={() => handleSelect(link.title)}
            className={`${
              filterQuery.toLowerCase() == link.title.toLowerCase()
                ? '!hover:border-[#010101] !hover:text-[#010101]   !border-[#010101]  !text-[#010101] '
                : ''
            } flex cursor-pointer flex-col items-center justify-center border-b-[2px] border-transparent   pb-4 pt-6 text-[#727272] hover:border-gray-200 hover:text-[#010101]`}
          >
            <span className="text-3xl">{link.icon}</span>

            <span className="mt-2 text-nowrap text-sm">{link.title}</span>
          </div>
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
