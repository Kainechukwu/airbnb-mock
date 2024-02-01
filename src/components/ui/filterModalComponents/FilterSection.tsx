import React from 'react'

export default function FilterSection({
  header,
  children
}: {
  header?: string
  children: any
}) {
  return (
    <div className="border-b border-gray-200 py-8">
      <div className="flex flex-col items-start justify-start">
        <header className="mb-6 text-[20px] text-[#222222]">{header}</header>
        {children}
      </div>
    </div>
  )
}
