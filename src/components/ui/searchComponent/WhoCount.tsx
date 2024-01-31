import React, { useState, useContext, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'
import { DashboardContext } from '../../../utils'

function CountButton({ type, count }: { type: string; count?: number }) {
  return (
    <button
      disabled={count == 0 && type == 'minus'}
      className={`${
        count == 0 && type == 'minus'
          ? 'cursor-not-allowed opacity-25 hover:opacity-100'
          : ''
      } flex size-8 items-center justify-center rounded-full border border-[#B2B2B2] hover:border-[#222222]`}
    >
      {type == 'add' && (
        <div>
          <FaPlus />
        </div>
      )}
      {type == 'minus' && (
        <div>
          <FaMinus />
        </div>
      )}
    </button>
  )
}

export default function WhoCount({ item }) {
  const { setWho, who } = useContext(DashboardContext)

  const [count, setCount] = useState(who[item.action])

  const handleCount = (type, count) => {
    if (type == 'add') {
      setCount(count + 1)
      console.log(item)
    }
    if (type == 'minus' && count > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    setWho({ ...who, [item.action]: count })
    // console.log(who)
  }, [count])

  useEffect(() => {
    const total = who.adult + who.pet + who.children + who.infant
    if (total == 0) {
      setCount(0)
    }
  }, [who])

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className={`  text-[16px] text-[#222222]`}>{item.title}</span>
        <span
          className={`${
            item.title.toLowerCase() == 'pets' ? 'underline' : ''
          } text-[14px] text-[#717171]`}
        >
          {item.desc}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div onClick={() => handleCount('minus', count)} className="">
          <CountButton type={'minus'} count={count} />
        </div>
        <span className="">{count}</span>
        <div
          onClick={() => {
            handleCount('add', count)
          }}
          className=""
        >
          {' '}
          <CountButton type={'add'} />
        </div>
      </div>
    </div>
  )
}
