import React from 'react'
import WhoCount from './WhoCount'

export default function Who() {
  const options = [
    {
      title: 'Adults',
      desc: 'Ages 13 and above'
    },
    {
      title: 'Children',
      desc: 'Ages 1 - 12'
    },
    {
      title: 'Infant',
      desc: 'Under 2'
    },
    {
      title: 'Pets',
      desc: 'Bringing a service animal?'
    }
  ]
  return (
    <div className="flex w-[375px] flex-col gap-8 p-8 ">
      <div className="mb-4 grid grid-cols-1 gap-4">
        {options.map((item, index) => (
          <div
            key={item.title}
            className={`${index < options.length - 1 ? 'border-b  pb-6' : ''} `}
          >
            <WhoCount item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
