import React, { useState, useContext, useCallback, useEffect } from 'react'
import SelectorButton from './SelectorButton'
import { PiFlowerLotus } from 'react-icons/pi'
import { FilterContext } from '../../../utils'

export default function TopTierStays() {
  const { filterState, dispatchFilter } = useContext(FilterContext)

  const [topTier, setTopTier] = useState(filterState.topTierStays)

  const dispatchTopTierStays = useCallback(() => {
    dispatchFilter({ type: 'topTierStays', payload: topTier })
  }, [dispatchFilter, topTier])

  useEffect(() => {
    dispatchTopTierStays()
  }, [dispatchTopTierStays])

  useEffect(() => {}, [filterState])

  return (
    <div onClick={() => setTopTier(!topTier)} className="max-w-max">
      <SelectorButton active={topTier}>
        <div className="flex max-w-[350px] flex-col items-start px-2">
          <span className="mb-4 text-[45px]">
            <PiFlowerLotus />
          </span>
          <span className="text-base text-[#222222]">Guest favourites</span>
          <span className="max-w-[250px] text-start text-sm text-[#727272]">
            Get the most loved homes on airbnb, according to guests
          </span>
        </div>
      </SelectorButton>
    </div>
  )
}
