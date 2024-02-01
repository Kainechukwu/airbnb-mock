import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import OutsideClickHandler from 'react-outside-click-handler'
export function closeButton(setIsOpen) {
  setIsOpen(false)
}
export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems1 = ['Sign up', 'Log in']

  const menuItems2 = ['Gift cards', 'Airbnb your home', 'Help Center']

  return (
    <OutsideClickHandler onOutsideClick={() => closeButton(setIsOpen)}>
      <div className="">
        {/* <div className="fixed top-0 z-[-4px] size-2 bg-transparent"> </div> */}
        <span onClick={() => setIsOpen(!isOpen)}>
          {' '}
          <div className="relative">
            <div className="flex cursor-pointer items-center gap-3 rounded-[40px] border border-[#E1E1E1] p-[9px] text-xs font-semibold text-[#292929] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)]">
              <IoMdMenu className="text-2xl  text-[#717171]" />
              <FaUserCircle className="text-3xl  text-[#717171]" />
            </div>
            {isOpen && (
              <div className="absolute bottom-[-260px] right-0 z-10 w-[220px] rounded-lg bg-white pt-[10px]  shadow-[0px_1px_20px_0px_rgba(0,0,0,0.15)]">
                <ul className="pb-[10px]">
                  {menuItems1.map((item) => (
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`${
                        item.toLowerCase() == 'sign up'
                          ? 'font-medium'
                          : 'font-normal'
                      } cursor-pointer px-[14px] py-3 text-[13px] text-[#222222] hover:bg-[#F7F7F7]`}
                      key="item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="border-t-[1px] border-t-[#DDDDDD] pb-[10px] ">
                  {menuItems2.map((item) => (
                    <li
                      onClick={() => setIsOpen(false)}
                      className={`${
                        item.toLowerCase() == 'sign up'
                          ? 'font-medium'
                          : 'font-normal'
                      } cursor-pointer px-[14px] py-3 text-[13px] text-[#222222] hover:bg-[#F7F7F7]`}
                      key="item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </span>
      </div>
    </OutsideClickHandler>
  )
}
