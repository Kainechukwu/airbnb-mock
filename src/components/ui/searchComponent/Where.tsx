import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
export function closeButton(setIsOpen) {
  setIsOpen(false)
}
export default function Where() {
  const [isOpen, setIsOpen] = useState(false)
  const item = {
    title: 'Where',
    desc: 'Search destinations'
  }

  return (
    <OutsideClickHandler onOutsideClick={() => closeButton(setIsOpen)}>
      <div className="">
        {/* <div className="fixed top-0 z-[-4px] size-2 bg-transparent"> </div> */}
        <span onClick={() => setIsOpen(!isOpen)}>
          {' '}
          <div className="relative">
            <div
              key={item.title}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`${isOpen ? 'searchBoxShadow bg-white' : ''} ${
                !item.title.toLowerCase().includes('check') ? 'flex-1' : ''
              } relative flex cursor-pointer items-center rounded-[40px] p-4 pl-8 hover:bg-[#EBEBEB]`}
            >
              <div
                className={` ${
                  item.title.toLowerCase().includes('check') ? 'mr-6' : 'mr-12'
                }  flex flex-col`}
              >
                <span className="text-xs text-[#222222]"> {item.title}</span>
                <span className="text-xs text-[#727272]"> {item.desc}</span>
              </div>
            </div>
            {isOpen && (
              <div className="absolute bottom-[-45px] left-0 z-10 w-[220px] rounded-lg bg-white pt-[10px]  shadow-[0px_1px_20px_0px_rgba(0,0,0,0.15)]">
                stuff
              </div>
            )}
          </div>
        </span>
      </div>
    </OutsideClickHandler>
  )
}
