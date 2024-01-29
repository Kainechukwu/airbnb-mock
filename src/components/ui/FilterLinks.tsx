import React from 'react'
import { PiTreePalm } from 'react-icons/pi'
import { HiOutlineHomeModern } from 'react-icons/hi2'

export default function FilterLinks() {
  const links = [
    {
      title: 'Design',
      icon: <HiOutlineHomeModern />
    },
    {
      title: 'Tropical',
      icon: <PiTreePalm />
    }
  ]

  return (
    <div>
      <div className="flex items-center gap-[32px]">
        {links.map((link) => (
          <div
            key={link.title}
            className={`flex cursor-pointer flex-col items-center justify-center border-b-[2px] border-transparent   pb-4 pt-6 text-[#727272] hover:border-gray-200 hover:text-[#010101]`}
          >
            <span>{link.icon}</span>
            <span className="text-sm">{link.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
