import React from 'react'

export default function EmptyWhereSearch() {
  const options = [
    {
      name: "I'm flexible",
      img: '/worldmap2.png'
    },
    {
      name: 'Africa',
      img: '/worldmap2.png'
    },
    {
      name: 'United Kingdom',
      img: '/worldmap2.png'
    },
    {
      name: 'united States',
      img: '/worldmap2.png'
    },
    {
      name: 'Canada',
      img: '/worldmap2.png'
    },
    {
      name: 'Middle East',
      img: '/worldmap2.png'
    }
  ]
  return (
    <div className="w-[468px] p-8 ">
      <div className="flex flex-col gap-8">
        <span className="text-[13px] font-semibold text-[#222222]">
          Search by region
        </span>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {options.map((item) => (
            <div key={item.name} className="flex flex-col">
              <div className="size-[124px] border hover:border-[#222222] cursor-pointer mb-2 rounded-xl">
                <img className="size-full rounded-xl" src={item.img} alt="" />
              </div>

              <span className="text-[13px] text-[#222222]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
