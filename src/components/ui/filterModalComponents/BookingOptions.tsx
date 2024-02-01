import React from 'react'
import Switch from '../Switch'
function OptionsSelect({ option }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start">
        <span className="text-base text-[#222222]">{option.name}</span>
        <span
          className={`${
            option?.underline ? 'underline' : ''
          } text-sm text-[#727272]`}
        >
          {option.desc}
        </span>
      </div>

      <div className="mr-2">
        <Switch />
      </div>
    </div>
  )
}

export default function BookingOptions() {
  const bookingOptionList = [
    {
      name: 'Instant Book',
      desc: 'Listings you can book without waiting for Host approval'
    },
    {
      name: 'Self check-in',
      desc: 'Easy access to the property once you arrive'
    },
    {
      name: 'Allows pets',
      desc: 'Bringing a service animal?',
      underline: true
    }
  ]
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {bookingOptionList.map((item) => (
          <div key={item.name} className="w-full">
            <OptionsSelect option={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
