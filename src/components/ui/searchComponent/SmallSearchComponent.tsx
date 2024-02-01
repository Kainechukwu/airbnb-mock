/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { DashboardContext } from '../../../utils'
import SmallSearchButtonOption from './SmallSearchButtonOption'
export default function SmallSearchComponnent() {
  const { handleSearch, setIsShowingBigSearch } = useContext(DashboardContext)

  const searchFilters = [
    {
      title: 'Anywhere',
      desc: 'Search destinations'
    },
    {
      title: 'Any week',
      desc: 'Add dates'
    },
    {
      title: 'Any guests',
      desc: 'Add dates'
    }
  ]

  const handleClick = (type) => {
    console.log(type)
    setIsShowingBigSearch(true)
  }
  return (
    <div className="searchBoxShadow relative mx-auto mb-6 flex w-full max-w-[450px] items-center  gap-0 rounded-[40px] border border-gray-200 bg-white">
      <div
        onClick={() => handleSearch()}
        className="absolute  right-2 z-[2] flex size-[30px] items-center justify-center rounded-full bg-[#EC4C60] text-[18px] text-white"
      >
        <HiOutlineSearch />
      </div>
      {searchFilters?.map((item, index) => (
        <div
          onClick={() => handleClick(item)}
          className="flex items-center"
          key={item.title}
        >
          <div
            className={`${
              index == 0 ? 'hidden' : ''
            } h-[26px] w-px bg-gray-200`}
          ></div>
          <SmallSearchButtonOption item={item} />
        </div>
      ))}
    </div>
  )
}
