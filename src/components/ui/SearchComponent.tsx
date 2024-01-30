/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

export default function SearchComponent() {
  //   const searchFiltersSmall = ['Anywhere', 'Any week', '  Add guest']
  const searchFilters = [
    {
      title: 'Where',
      desc: 'Search destinations'
    },
    {
      title: 'Check in',
      desc: 'Add dates'
    },
    {
      title: 'Check out',
      desc: 'Add dates'
    },
    {
      title: 'Who',
      desc: 'Add guests'
    }
  ]

  return (
    <div className="searchBoxShadow relative mx-auto mb-6 flex w-full max-w-[850px] items-center  gap-0 rounded-[40px] border border-gray-200 bg-white">
      <div className="absolute  z-[2] right-2 flex size-[48px] items-center justify-center rounded-full bg-[#EC4C60] text-[18px] text-white">
        <HiOutlineSearch />
      </div>
      {searchFilters?.map((item, index) => (
        <div
          key={item.title}
          className={` ${
            !item.title.toLowerCase().includes('check') ? 'flex-1' : ''
          } relative flex cursor-pointer items-center rounded-[40px] p-4 pl-8 hover:bg-[#EBEBEB]`}
        >
          <div className={`absolute left-0 h-8 w-[1px] bg-gray-200`}></div>
          <div
            className={` ${
              item.title.toLowerCase().includes('check') ? 'mr-6' : 'mr-12'
            }  flex flex-col`}
          >
            <span className="text-xs text-[#222222]"> {item.title}</span>
            <span className="text-xs text-[#727272]"> {item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
