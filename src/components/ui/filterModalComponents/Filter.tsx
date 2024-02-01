import React, { useEffect, useRef } from 'react'
import FilterSection from './FilterSection'
import BedsAndBathrooms from './BedsAndBathrooms'
import TopTierStays from './TopTierStays'
import PropertyType from './PropertyType'
import Amenities from './Amenities'
import BookingOptions from './BookingOptions'
import AccessibilityFeatures from './AccessibilityFeatures'
import HostLanguage from './HostLanguage'
import TypeofPlace from './TypeofPlace'

export default function Filter() {
  const filterRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // if (filterRef && filterRef?.current) {
    filterRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })
    // }
  }, [])
  return (
    <div ref={filterRef} className="relative">
      <div className="flex flex-col">
        <FilterSection header="Type of place">
          <TypeofPlace />
        </FilterSection>
        <FilterSection header="Beds and bathrooms">
          <BedsAndBathrooms />
        </FilterSection>
        <FilterSection header="Top tier stays">
          <TopTierStays />
        </FilterSection>
        <FilterSection header="Property Type">
          <PropertyType />
        </FilterSection>
        <FilterSection header="Amenities">
          <Amenities />
        </FilterSection>
        <FilterSection header="Booking options">
          <BookingOptions />
        </FilterSection>
        <FilterSection header="Accessibility features">
          <AccessibilityFeatures />
        </FilterSection>
        <FilterSection header="Host language">
          <HostLanguage />
        </FilterSection>
      </div>
    </div>
  )
}
