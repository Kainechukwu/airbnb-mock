import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

export default function BottomLinks() {
  const bottomLinks = ['Terms', 'Sitemap', 'Privacy', 'Your Privacy Choices']

  return (
    <div className="flex items-center justify-between px-16 py-[28px]">
      <div className="flex items-center  text-sm font-normal">
        <span className="">© 2024 Airbnb, Inc.</span>
        {bottomLinks.map((link) => (
          <div key={link} className="flex items-center ">
            <span className="px-2">.</span>
            <span>{link}</span>
          </div>
        ))}
        <div className="">
          <img
            src="/bluemarkpill.png"
            alt="pill"
            className="w-[26px ml-2 h-[14px]"
          />
        </div>
      </div>

      <div className="flex items-center text-sm font-semibold text-[#222222]">
        <TbWorld />
        <span className="ml-2">
          <span className="text-[13px]">English</span> (US)
        </span>
        <span className="mx-6">$ USD</span>

        <div className="flex items-center gap-4">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  )
}
