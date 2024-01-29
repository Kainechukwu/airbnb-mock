import React from 'react'
import FilterLinks from './FilterLinks'
import { LuSettings2 } from 'react-icons/lu'
import Switch from './Switch'

export default function Filter() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <FilterLinks />

        <div className="flex gap-4">
          <div className="flex cursor-pointer items-center gap-2 rounded-[12px] border border-[#E1E1E1] p-4 text-xs font-semibold text-[#292929]">
            <span>
              <LuSettings2 />
            </span>{' '}
            <span>Filter</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-[12px] border border-[#E1E1E1] p-4 text-xs font-semibold text-[#292929]">
            <span>Display total before taxes</span>

            <div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
