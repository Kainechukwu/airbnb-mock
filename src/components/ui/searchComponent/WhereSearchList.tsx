import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
export default function WhereSearchList() {
  return (
    <div className=" w-full py-8">
      <div
        className={`flex cursor-pointer items-center gap-4 px-8 py-2 hover:bg-[#F7F7F7]`}
      >
        <div className="rounded-[14px] bg-[#EBEBEB] p-3.5 text-[22px] text-[#222222]">
          <SlLocationPin />
        </div>
        <span className="text-base text-[#222222]">Text</span>
      </div>
    </div>
  )
}
