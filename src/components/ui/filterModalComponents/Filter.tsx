import React from 'react'
import FilterSection from './FilterSection'
import BedsAndBathrooms from './BedsAndBathrooms'
export default function Filter() {
  return (
    <div>
      <div className="flex flex-col">
        <FilterSection header="Beds and bathrooms">
          <BedsAndBathrooms />
        </FilterSection>
      </div>
    </div>
  )
}
