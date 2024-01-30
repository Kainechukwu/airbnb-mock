import React from 'react'

export default function FooterNavResults({ title, desc }) {
  return (
    <div className="flex flex-col gap-[2px] pb-[26px] text-[14px]  ">
      <span className="font-medium text-[#222222]">{title}</span>
      <span className=" text-[#727272] ">{desc}</span>
    </div>
  )
}
