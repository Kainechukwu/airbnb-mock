import React from 'react'
import FooterNav from './FooterNav'
import FooterLinks from './FooterLinks'
import BottomLinks from './BottomLinks'

export default function Footer() {
  return (
    <div className="bg-[#F7F7F7] ">
      <div className="px-6 pb-2  pt-[34px] md:px-16">
        <h1 className="text-[18px] font-semibold text-[#222222]">
          {' '}
          Inspiration for future getaways
        </h1>
        <FooterNav />
      </div>
      <div className="border-t-[1px] border-t-[#DDDDDD] pt-[50px]">
        <FooterLinks />
      </div>
      <BottomLinks />
    </div>
  )
}
