import React, { useContext } from 'react'
import { DashboardContext, actionNames } from '../../../utils'

export default function SmallSearchButtonOption({ item }) {
  // const [activeSearch, setActiveSearch] = useState()
  const { setActiveButton } = useContext(DashboardContext)

  function handleActiveSearch(title) {
    if (title.toLowerCase() == 'anywhere') {
      setActiveButton(actionNames.where)
    }
    if (title.toLowerCase() == 'any week') {
      setActiveButton(actionNames.checkIn)
    }
    if (title.toLowerCase() == 'any guests') {
      setActiveButton(actionNames.who)
    }
  }
  return (
    <div>
      <div
        className={`${
          !item.title.toLowerCase().includes('guests') ? 'w-[134px]' : 'flex-1'
        } relative`}
      >
        <div
          onClick={() => handleActiveSearch(item.title)}
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
