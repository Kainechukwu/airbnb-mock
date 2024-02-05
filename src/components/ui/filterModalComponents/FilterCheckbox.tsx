import React, { useState } from 'react'

export default function FilterCheckbox({
  label,
  checked,
  onChange
}: {
  label?: string
  checked?: boolean | (() => boolean)
  onChange: () => void
}) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    setIsChecked((prevChecked) => !prevChecked)
    console.log(onChange)
  }
  return (
    <div className="flex items-center gap-6">
      <input
        className="size-6 rounded-[4px]   accent-[#222222] outline-none ring-0"
        name="item"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="text-[#222222]" htmlFor="item">
        {label}
      </label>
    </div>
  )
}
