/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Where from './Where'
import Check from './Check'
import Who from './Who'
import SearchButtonOption from './SearchButtonOption'
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
    <div className="flex flex-col">
      <div className="searchBoxShadow relative mx-auto mb-6 flex w-full max-w-[850px] items-center  gap-0 rounded-[40px] border border-gray-200 bg-white">
        <div className="absolute  right-2 z-[2] flex size-[48px] items-center justify-center rounded-full bg-[#EC4C60] text-[18px] text-white">
          <HiOutlineSearch />
        </div>
        {searchFilters?.map((item) => (
          <SearchButtonOption key={item.title} item={item}>
            <div>{item.title.toLowerCase().includes('where') && <Where />}</div>
            <div>{item.title.toLowerCase().includes('check') && <Check />}</div>
            <div>{item.title.toLowerCase().includes('who') && <Who />}</div>
          </SearchButtonOption>
        ))}
      </div>
    </div>
  )
}
