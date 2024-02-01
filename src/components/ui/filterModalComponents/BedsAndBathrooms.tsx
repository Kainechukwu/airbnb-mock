import React, { useState } from 'react'

function ButtonList({ header, children }) {
  return (
    <div className="flex flex-col items-start">
      <span className="mb-6 text-[#222222]">{header}</span>
      <div className="flex gap-4">{children}</div>
    </div>
  )
}

function Button({ label, active }) {
  return (
    <div
      className={`${
        active ? 'bg-[#222222] text-white' : ''
      } flex cursor-pointer items-center rounded-[40px] border border-gray-300 px-6 py-2 text-[15px] hover:border-[#222222]`}
    >
      {label}
    </div>
  )
}

export default function BedsAndBathrooms() {
  const buttonOptions = ['Any', '1', '2', '3', '4', '5', '6', '7', '8+']
  const [beds, setBeds] = useState('Any')
  const [bathrooms, setBathrooms] = useState('Any')

  return (
    <div className="flex flex-col gap-6">
      <ButtonList header="Beds">
        {buttonOptions.map((item) => (
          <div onClick={() => setBeds(item)} key={item} className="">
            <Button
              label={item}
              active={beds.toLowerCase() == item.toLowerCase()}
            />
          </div>
        ))}
      </ButtonList>
      <ButtonList header="Bathrooms">
        {buttonOptions.map((item) => (
          <div onClick={() => setBathrooms(item)} key={item} className="">
            <Button
              label={item}
              active={bathrooms.toLowerCase() == item.toLowerCase()}
            />
          </div>
        ))}
      </ButtonList>
    </div>
  )
}
