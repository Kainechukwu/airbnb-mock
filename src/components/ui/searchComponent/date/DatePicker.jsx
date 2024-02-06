import React, { useEffect, useState, useContext, useCallback } from 'react'
import { Calendar, DateObject } from 'react-multi-date-picker'
import { FaPlusMinus } from 'react-icons/fa6'
import { DashboardContext } from '../../../../utils'
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
  const { checkingDates, setCheckingDates } = useContext(DashboardContext)
  const dayTypes = ['Exact days', '1 day', '2 days', '3 days', '7 days']
  const [dayType, setDayType] = useState('Exact days')

  const [dateRange, setDateRange] = useState([
    new DateObject(checkingDates.from),
    new DateObject(checkingDates.to)
  ])

  const handleDateChange = useCallback(() => {
    // const from =
    //   dateRange?.length > 0 ? dateRange[0]?.format('DD/MM/YYYY') : null
    // const to =
    //   dateRange?.length > 1
    //     ? dateRange[dateRange?.length - 1]?.format('DD/MM/YYYY')
    //     : null
    const from = dateRange?.length > 0 ? dateRange[0] : null
    const to = dateRange?.length > 1 ? dateRange[dateRange?.length - 1] : null
    console.log('🚀 ~ useEffect ~ dateRange:', dateRange)
    console.log('🚀 ~ useEffect ~ from:', from)
    console.log('🚀 ~ useEffect ~ to:', to)

    if (from) {
      setCheckingDates({ ...checkingDates, from: from })
      const checkOutButton = document.getElementById('checkOutButton')

      console.log(checkOutButton)
      checkOutButton?.click()
    }
    if (to) {
      setCheckingDates({ ...checkingDates, to: to })
      //move to checkin
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange])
  useEffect(() => {
    handleDateChange()
  }, [dateRange, handleDateChange])

  return (
    <div className="mt-4">
      <Calendar
        value={dateRange}
        onChange={setDateRange}
        format="DD/MM/YYYY"
        range
        // onlyShowInRangeDates={true}
        highlightDates={[]}
        numberOfMonths={2}
        disableMonthPicker
        disableYearPicker
        startDate={dateRange[0] ? dateRange[0] : null}
        endDate={dateRange[1] ? dateRange[dateRange.length - 1] : null}
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
