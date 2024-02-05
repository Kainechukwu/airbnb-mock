import React, { useState } from 'react'
import DatePicker from './date/DatePicker.jsx'
import MonthsPicker from './date/MonthsPicker'
import FlexibleDate from './date/FlexibleDate'
export default function Check() {
  const options = ['Dates', 'Months', 'Flexible']
  const [option, setOption] = useState(options[0])
  return (
    <div className="h-[550px] w-[850px] p-8">
      <div className="flex flex-col">
        <div className="mx-auto flex max-w-max items-center  justify-center gap-2 rounded-[40px] bg-[#EBEBEB] p-1">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => setOption(item)}
              className={`rounded-[40px] px-6 py-1 ${
                option.toLowerCase() !== item.toLowerCase()
                  ? 'hover:bg-[#DDDDDD]'
                  : 'border border-[#DFDFDF] bg-[white]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center">
          {option.toLowerCase() == 'dates' && <DatePicker />}
          {option.toLowerCase() == 'months' && <MonthsPicker />}
          {option.toLowerCase() == 'flexible' && <FlexibleDate />}
        </div>
      </div>
    </div>
  )
}
