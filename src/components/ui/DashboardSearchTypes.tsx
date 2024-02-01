import React, { useContext } from 'react'
import { DashboardContext } from '../../utils'

export default function DashboardSearchTypes() {
  const { searchType, setSearchType } = useContext(DashboardContext)

  const dashboardSearchTypes = ['stays', 'experiences', 'online experiences']

  return (
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
  )
}
