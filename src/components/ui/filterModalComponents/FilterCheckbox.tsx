import React from 'react'

export default function FilterCheckbox({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-6">
      <input
        className="size-6 rounded-[4px]   accent-[#222222] outline-none ring-0"
        name="item"
        type="checkbox"
      />
      <label className="text-[#222222]" htmlFor="item">
        {label}
      </label>
    </div>
  )
}
