import React, { useContext } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { DashboardContext } from '../../../utils'

export default function WhereSearchList() {
  const { setWhereValue, locationList } = useContext(DashboardContext)

  return (
    <div className=" w-full py-8">
      {locationList.length > 0 &&
        locationList?.map((item) => (
          <div
            onClick={() => setWhereValue(item.name)}
            key={item.id}
            className={`flex w-[360px] cursor-pointer items-center gap-4 px-8 py-2 hover:bg-[#F7F7F7]`}
          >
            <div className="rounded-[14px] bg-[#EBEBEB] p-3.5 text-[22px] text-[#222222]">
              <SlLocationPin />
            </div>
            <span className="text-base text-[#222222]">{item.name}</span>
          </div>
        ))}
    </div>
  )
}
