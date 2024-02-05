import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-multi-date-picker'
import { FaPlusMinus } from 'react-icons/fa6'
// import { getDateString, parseDateString } from 'react-multi-date-picker'

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

// type dateType = {
//   from: DateObject | null
//   to: DateObject | null
// }

export default function DatePicker() {
  const dayTypes = ['Exact days', '1 day', '2 days', '3 days', '7 days']
  const [dayType, setDayType] = useState('Exact days')

  const [dateRange, setDateRange] = useState([])

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ dateRange:', dateRange)
  }, [dateRange])

  const handleDateChange = (event) => {
    setDateRange(event)
  }

  return (
    <div className="mt-4">
      <Calendar
        value={dateRange}
        onChange={handleDateChange}
        format="MM/DD/YYYY"
        range
        // onlyShowInRangeDates={true}
        numberOfMonths={2}
        disableMonthPicker
        disableYearPicker
      >
        <div className="mt-3 flex gap-4">
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
