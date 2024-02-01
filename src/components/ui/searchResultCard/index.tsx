import React from 'react'
import { IoMdStar } from 'react-icons/io'
import SwiperSlider from './SwiperSlider'
export default function ResultCard({ result }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-4">
          <SwiperSlider imageUrls={result?.images} />
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-[#222222]">
              {result.location}
            </span>
            <span className="text-base text-[#717171]">{result.distance}</span>
            <span className="text-base text-[#717171]">{result.date}</span>
            <span className="text-base font-semibold text-[#222222]">
              {result.amount}{' '}
              <span className="font-normal">{result.tenor}</span>
            </span>
          </div>
          <div className="flex h-full items-start">
            {result.rating && (
              <div className="flex items-center gap-1">
                <IoMdStar />
                <span className="text-base  text-[#222222]">
                  {result.rating}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
