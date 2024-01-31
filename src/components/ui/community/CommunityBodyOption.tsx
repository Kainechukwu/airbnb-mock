import React from 'react'

export default function CommunityBodyOptions({
  selected = false,
  item
}: {
  selected?: boolean
  item: any
}) {
  return (
    <div
      className={`${
        selected ? 'border border-[#222222]' : 'border border-transparent'
      } flex cursor-pointer flex-col items-start rounded-lg   p-3 hover:bg-[#F7F7F7]`}
    >
      <span className="text-sm text-[#222222]">{item.title}</span>
      <span className="text-sm text-[#7F7F7F]">{item.desc}</span>
    </div>
  )
}
