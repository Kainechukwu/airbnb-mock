import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default function Amenities() {
  const amenities = [
    'Wifi',
    'Kitchen',
    'Washer',
    'Air conditioning',
    'Heating',
    'Dryer'
  ]
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <span className="text-[#222222]">Essentials</span>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8">
        {amenities.map((item) => (
          <div key={item} className="">
            <FilterCheckbox label={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
