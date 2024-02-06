import React, { useState } from 'react'
import FilterCheckbox from './FilterCheckbox'

export default function MultiSelect({ options }) {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([])

  const handleChange = () => {
    setSelectedOptions([])
  }
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8">
        {options.map((item) => (
          <div key={item} className="">
            <FilterCheckbox
              label={item}
              checked={() => selectedOptions.some((i) => i === item)}
              onChange={() => handleChange()}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
