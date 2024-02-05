import React from 'react'
import FilterMultiSelect from './FilterMultiSelect'

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

      <FilterMultiSelect options={amenities} />
    </div>
  )
}
