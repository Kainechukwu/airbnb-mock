import React from 'react'

export default function CommunityHeader({ selected, setSelected }) {
  const navs = ['Language and region', 'Currency']
  return (
    <div className="flex w-full">
      <div className="flex w-full items-center gap-[32px] border-b-[1px] border-b-[#DDDDDD]">
        {navs.map((nav) => (
          <div
            onClick={() => setSelected(nav)}
            key={nav}
            className={`${
              selected.toLowerCase() == nav.toLowerCase()
                ? 'border-[#222222] text-[#222222] '
                : 'border-transparent text-[#727272] '
            } flex cursor-pointer flex-col items-center justify-center border-b-[2px] pb-1   pt-6 font-medium  `}
          >
            <div className="-mx-2 rounded-md p-2 text-sm hover:bg-[#F7F7F7]">
              <span className="">{nav}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
