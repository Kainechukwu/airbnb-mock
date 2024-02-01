import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

export default function BottomLinks() {
  const bottomLinks = ['Terms', 'Sitemap', 'Privacy', 'Your Privacy Choices']

  return (
    <div className="flex items-center px-6 py-[28px]  md:px-16 xl:justify-between">
      <div className="mx-auto flex flex-col items-center  text-sm font-normal xl:mx-0 xl:flex-row">
        <span className="">© 2024 Airbnb, Inc.</span>
        <div className="flex items-center">
          {bottomLinks.map((link) => (
            <div key={link} className="flex flex-row items-center">
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
      </div>

      <div className="hidden items-center text-sm font-semibold text-[#222222] xl:flex">
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
