import React, { useState, useContext, useCallback, useEffect } from 'react'
import SelectorButton from './SelectorButton'
import { PiHouseLine } from 'react-icons/pi'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import { PiWarehouse } from 'react-icons/pi'
import { FilterContext } from '../../../utils'

export default function PropertyType() {
  const { filterState, dispatchFilter } = useContext(FilterContext)
  const [propertyTypes, setPropertyTypes] = useState<any[]>(
    filterState.propertyType
  )
  const types = [
    {
      name: 'House',
      icon: <PiHouseLine />
    },
    {
      name: 'Apartment',
      icon: <HiOutlineBuildingOffice />
    },
    {
      name: 'Guesthouse',
      icon: <PiWarehouse />
    }
  ]

  const dispatchPropertyTypes = useCallback(() => {
    dispatchFilter({ type: 'propertyType', payload: propertyTypes })
  }, [propertyTypes, dispatchFilter])

  const handlePropertyTypes = (type) => {
    // console.log(type)
    const optionExists = propertyTypes.some(
      (option) => option?.toLowerCase() === type?.toLowerCase()
    )

    if (!optionExists) {
      setPropertyTypes([...propertyTypes, type])
      return
    }
    if (optionExists) {
      const newTypes = propertyTypes.filter(
        (item) => item?.toLowerCase() !== type.toLowerCase()
      )

      setPropertyTypes(newTypes)
      return
    }
  }

  useEffect(() => {
    dispatchPropertyTypes()
  }, [dispatchPropertyTypes])

  return (
    <div className="flex gap-4">
      {types.map((item) => (
        <div
          onClick={() => handlePropertyTypes(item.name)}
          key={item.name}
          className=""
        >
          <SelectorButton active={propertyTypes.includes(item.name)}>
            <div className="flex w-[140px] flex-col items-start ">
              <span className="mb-8 text-[35px]">{item.icon}</span>
              <span className="text-base text-[#222222]">{item.name}</span>
            </div>
          </SelectorButton>
        </div>
      ))}
    </div>
  )
}
