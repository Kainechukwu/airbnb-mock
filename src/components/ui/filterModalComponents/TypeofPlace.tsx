import React, { useState } from 'react'

export default function TypeofPlace() {
  const homes = ['Any type', 'Rooms', 'Entire home']
  const [selected, setSelected] = useState(homes[0])
  return (
    <div className="w-full">
      <div className="flex flex-col items-start gap-4">
        <div>A home all to yourself</div>

        <div className=" mx-auto flex ">
          {homes.map((item, index) => (
            <div
              onClick={() => setSelected(item)}
              key={item}
              className={`${
                selected.toLowerCase() == item.toLowerCase()
                  ? '!bg-[#222222] text-white'
                  : ''
              } ${index == 0 ? 'rounded-l-[18px]' : ''} ${
                index == homes.length - 1 ? 'rounded-r-[18px]' : ''
              } flex h-14 w-[200px] cursor-pointer items-center justify-center border border-gray-300 hover:border-[#222222]`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
