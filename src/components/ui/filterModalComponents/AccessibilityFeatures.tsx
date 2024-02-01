import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default function AccessinilityFeatures() {
  const features = [
    'Step-free guest entrance',
    'Guest entrance wider than 32 inches',
    'Accessible parking spot',
    'Step-free path to the guest entrance'
  ]
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <span className="text-[#222222]">Guest entrance and parking</span>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8">
        {features.map((item) => (
          <div key={item} className="">
            <FilterCheckbox label={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
