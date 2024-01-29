import React from 'react'
import { IoMdStar } from 'react-icons/io'
export default function ResultCard() {
  return (
    <div>
      <div className="flex flex-col">
        <div>carousel</div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-base font-semibold text-[#222222]">
              Rethimo, Greece
            </span>
            <span className="text-base text-[#717171]">3,000 km away</span>
            <span className="text-base text-[#717171]">April 14-19</span>
            <span className="text-base font-semibold text-[#222222]">
              $105 <span className="font-normal">night</span>
            </span>
          </div>
          <div className="flex h-full items-start">
            <div className="flex items-center gap-1">
              <IoMdStar />
              <span className="text-base  text-[#222222]">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
