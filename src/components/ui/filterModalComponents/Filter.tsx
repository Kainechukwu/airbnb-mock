import React from 'react'
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
  return (
    <div className="relative">
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
