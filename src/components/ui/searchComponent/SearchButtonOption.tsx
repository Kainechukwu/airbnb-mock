import React, { useState, useContext, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { DashboardContext } from '../../../utils'
import { FaTimes } from 'react-icons/fa'
export function closeButton(setIsOpen) {
  setIsOpen(false)
}
export default function SearchButtonOption({ item, children }) {
  const { setWho, who, whereValue, setWhereValue } =
    useContext(DashboardContext)
  const [defaultWhereValue, setDefaultWhereValue] = useState(whereValue)

  const handleWho = () => {
    const guests = who.adult + who.children
    const infants = who.infant
    const pets = who.pet
    let text = ''
    if (guests > 0) {
      text = `guests ${guests}${infants > 0 || pets > 0 ? ', ' : ''}`
    }

    if (infants > 0) {
      text = text + `infants ${infants}${pets > 0 ? ', ' : ''}`
    }

    if (pets > 0) {
      text = text + `pets ${pets}`
    }
    return text
  }

  const Refresh = () => {
    setWho({ adult: 0, children: 0, infant: 0, pet: 0 })
  }

  const [isOpen, setIsOpen] = useState(false)
  const setPosition = (itemName) => {
    let position = 'bottom-[-45px] left-0'
    if (itemName.toLowerCase().includes('where')) {
      position = 'bottom-[-470px] left-0'
    }
    if (itemName.toLowerCase().includes('who')) {
      position = 'bottom-[-402px] right-0'
    }
    if (itemName.toLowerCase().includes('check')) {
      position = 'bottom-[-518px] right-[-271px]'
    }

    return position
  }

  useEffect(() => {
    setDefaultWhereValue(whereValue)
  }, [whereValue])

  return (
    <OutsideClickHandler onOutsideClick={() => closeButton(setIsOpen)}>
      <div className="">
        {/* <div className="fixed top-0 z-[-4px] size-2 bg-transparent"> </div> */}
        <span onClick={() => setIsOpen(true)}>
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
                isOpen ? 'searchBoxShadow bg-white hover:bg-white' : ''
              }  relative flex cursor-pointer items-center rounded-[40px] p-4 pl-8 hover:bg-[#EBEBEB]`}
            >
              <div
                className={` ${
                  item.title.toLowerCase().includes('check') ? 'mr-6' : 'mr-12'
                }  relative flex flex-col`}
              >
                <span className="mb-1 text-xs text-[#222222]">
                  {' '}
                  {item.title}
                </span>

                {item.title.toLowerCase() !== 'who' &&
                  item.title.toLowerCase() !== 'where' && (
                    <span className="text-xs text-[#727272]"> {item.desc}</span>
                  )}
                {item.title.toLowerCase() == 'who' && (
                  <div className="flex items-center gap-4">
                    <span
                      className={` ${
                        isOpen ? 'max-w-20 truncate' : ''
                      }   text-xs text-[#727272]`}
                    >
                      {' '}
                      {handleWho().length > 0 ? handleWho() : item.desc}
                    </span>
                    {who.adult + who.pet + who.children + who.infant > 0 &&
                      isOpen && (
                        <span
                          className="absolute inset-y-0  right-[-30px] flex cursor-pointer items-center text-sm"
                          onClick={() => Refresh()}
                        >
                          <FaTimes />
                        </span>
                      )}
                  </div>
                )}
                {item.title.toLowerCase() == 'where' && (
                  <div className="flex items-center gap-4">
                    <span className={`text-xs text-[#727272]`}>
                      <input
                        defaultValue={defaultWhereValue}
                        onChange={(e) => setWhereValue(e.target.value)}
                        placeholder={'Search destination'}
                        className={`${
                          isOpen ? '' : ''
                        } w-full bg-transparent outline-none ring-0 focus:outline-none focus:ring-0`}
                        type="text"
                      />
                    </span>
                    {/* {true && isOpen && (
                      <span
                        className="absolute inset-y-0  right-[-30px] flex cursor-pointer items-center text-sm"
                        onClick={() => Refresh()}
                      >
                        <FaTimes />
                      </span>
                    )} */}
                  </div>
                )}
              </div>
            </div>

            {isOpen && (
              <div
                className={`${setPosition(
                  item.title
                )} absolute  z-10  rounded-[40px] bg-white pt-[10px]  shadow-[0px_1px_20px_0px_rgba(0,0,0,0.15)]`}
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
