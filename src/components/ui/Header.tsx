import React, { useContext } from 'react'
import { DashboardContext } from '../../utils'
import HeaderMenu from '../ui/HeaderMenu'
import { TbWorld } from 'react-icons/tb'
import { SearchComponent } from '../ui'
export default function Header() {
  const { searchType, setSearchType } = useContext(DashboardContext)
  const dashboardSearchTypes = ['stays', 'experiences', 'online experiences']
  return (
    <div className="flex flex-col border-b border-gray-200">
      <div className="flex items-center justify-between px-16 py-[16px]">
        <div className="h-[41px] w-[121px]">
          <img
            className="size-full"
            src="/AirbnbLogo-removebg-preview.png"
            alt=""
          />
        </div>

        <div className="flex items-center gap-[34px] text-base font-normal text-[#717171]">
          {dashboardSearchTypes.map((type) => (
            <span
              className={`${
                searchType?.toLowerCase() == type.toLowerCase()
                  ? 'font-medium text-[#222222]'
                  : ''
              } capitalize`}
              onClick={() => setSearchType(type)}
              key={type}
            >
              {type}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-[24px]">
          <span className="text-[#222222]">Airbnb your home</span>
          <span className="text-[18px]">
            {' '}
            <TbWorld />
          </span>
          <HeaderMenu />
        </div>
      </div>
      <SearchComponent />
    </div>
  )
}
