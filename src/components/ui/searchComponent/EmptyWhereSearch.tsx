import React, { useContext } from 'react'
import { DashboardContext, staticLocationOptions } from '../../../utils'

export default function EmptyWhereSearch() {
  const { whereValue, setWhereValue } = useContext(DashboardContext)

  function handleWhere(option) {
    setWhereValue(
      option.name.toLowerCase().includes('flexible') ? '' : option.name
    )
    console.log(whereValue)
  }
  return (
    <div className="w-[468px] p-8 ">
      <div className="flex flex-col gap-8">
        <span className="text-[13px] font-semibold text-[#222222]">
          Search by region
        </span>
        <div className="mb-4 grid grid-cols-3 gap-4">
          {staticLocationOptions.map((item) => (
            <div
              onClick={() => handleWhere(item)}
              key={item.name}
              className="flex flex-col"
            >
              <div
                className={`${
                  item?.name?.toLowerCase() == String(whereValue)?.toLowerCase()
                    ? 'border-[#222222]'
                    : ''
                } mb-2 size-[124px] cursor-pointer rounded-xl border hover:border-[#222222]`}
              >
                <img className="size-full rounded-xl" src={item.img} alt="" />
              </div>

              <span className="text-[13px] text-[#222222]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
