import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
export function closeButton(setIsOpen) {
  setIsOpen(false)
}
export default function SearchButtonOption({ item, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const setPosition = (itemName) => {
    let position = 'bottom-[-45px]'
    if (itemName.toLowerCase().includes('where')) {
      position = 'bottom-[-470px]'
    }

    return position
  }

  return (
    <OutsideClickHandler onOutsideClick={() => closeButton(setIsOpen)}>
      <div className="">
        {/* <div className="fixed top-0 z-[-4px] size-2 bg-transparent"> </div> */}
        <span onClick={() => setIsOpen(!isOpen)}>
          {' '}
          <div
            className={`${
              !item.title.toLowerCase().includes('check')
                ? 'w-[270px] flex-1'
                : 'w-[154px]'
            } relative`}
          >
            <div
              key={item.title}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`${
                isOpen ? 'searchBoxShadow bg-white' : ''
              }  relative flex cursor-pointer items-center rounded-[40px] p-4 pl-8 hover:bg-[#EBEBEB]`}
            >
              <div
                className={` ${
                  item.title.toLowerCase().includes('check') ? 'mr-6' : 'mr-12'
                }  flex flex-col`}
              >
                <span className="mb-1 text-xs text-[#222222]">
                  {' '}
                  {item.title}
                </span>
                <span className="text-xs text-[#727272]"> {item.desc}</span>
              </div>
            </div>

            {isOpen && (
              <div
                className={`${setPosition(
                  item.title
                )} absolute left-0 z-10  rounded-[40px] bg-white pt-[10px]  shadow-[0px_1px_20px_0px_rgba(0,0,0,0.15)]`}
              >
                {children}
              </div>
            )}
          </div>
        </span>
      </div>
    </OutsideClickHandler>
  )
}
