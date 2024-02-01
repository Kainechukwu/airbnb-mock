import React, { useState } from 'react'
import { Calendar } from 'react-multi-date-picker'
import { FaPlusMinus } from 'react-icons/fa6'
function Buttons({ label, active }) {
  return (
    <div
      className={`${
        active ? 'border-2 !border-[#222222]' : ''
      } flex cursor-pointer items-center rounded-[40px] border border-gray-300 px-4 py-1 text-[12px] hover:border-[#222222]`}
    >
      <span
        className={`mr-1 text-xs text-[#222222] ${
          label.toLowerCase().includes('exact') ? 'hidden' : ''
        }`}
      >
        <FaPlusMinus />
      </span>
      {label}
    </div>
  )
}

export default function DatePicker() {
  const dayTypes = ['Exact days', '1 day', '2 days', '3 days', '7 days']
  const [dayType, setDayType] = useState('Exact days')

  return (
    <div className="mt-4">
      {' '}
      <Calendar numberOfMonths={2} disableMonthPicker disableYearPicker>
        <div className="flex gap-4 mt-3">
          {dayTypes.map((item) => (
            <div onClick={() => setDayType(item)} key={item} className="">
              <Buttons
                label={item}
                active={dayType.toLowerCase() == item.toLowerCase()}
              />
            </div>
          ))}
        </div>
      </Calendar>
    </div>
  )
}
