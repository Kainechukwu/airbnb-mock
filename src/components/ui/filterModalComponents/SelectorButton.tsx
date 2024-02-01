import React from 'react'

export default function SelectorButton({
  active = false,
  children
}: {
  active?: boolean

  children: any
}) {
  return (
    <div
      className={`${
        active ? '!border-2 !border-[#222222] !bg-[#F7F7F7]' : ''
      } cursor-pointer rounded-[12px] border border-gray-300 p-4 hover:border-[#222222]`}
    >
      {children}
    </div>
  )
}
