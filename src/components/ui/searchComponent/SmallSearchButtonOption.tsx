import React from 'react'

export default function SmallSearchButtonOption({ item }) {
  return (
    <div>
      <div
        className={`${
          !item.title.toLowerCase().includes('guests') ? 'w-[134px]' : 'flex-1'
        } relative`}
      >
        <div
          key={item.title}
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`${''}  relative flex cursor-pointer items-center rounded-[40px] py-3 pl-8 pr-4 hover:bg-[#EBEBEB]`}
        >
          <div
            className={` ${
              item.title.toLowerCase().includes('check') ? 'mr-6' : 'mr-12'
            }  relative flex flex-col`}
          >
            <span className=" text-nowrap text-xs text-[#222222]">
              {' '}
              {item.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
