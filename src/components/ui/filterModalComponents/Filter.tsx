import React, { useRef, useReducer } from 'react'
import FilterSection from './FilterSection'
import BedsAndBathrooms from './BedsAndBathrooms'
import TopTierStays from './TopTierStays'
import PropertyType from './PropertyType'
import Amenities from './Amenities'
import BookingOptions from './BookingOptions'
import AccessibilityFeatures from './AccessibilityFeatures'
import HostLanguage from './HostLanguage'
import TypeofPlace from './TypeofPlace'
import { FilterContext } from '../../../utils'

//Typing of the state
interface IFilterState {
  typeOfPlace: string
  error: string | null
  beds: any
  bathrooms: any
}

//Typing of action
interface Action {
  type: 'typeOfPlace' | 'reset' | 'bathrooms' | 'beds'
  payload: any
}

//Setting of state default value
const initialState = {
  typeOfPlace: 'Any where you like',
  error: null,
  beds: '',
  bathrooms: ''
}

const filterReducer = (state: IFilterState, action: Action) => {
  const { type } = action
  switch (type) {
    case 'typeOfPlace':
      return { ...state, typeOfPlace: action.payload }
    case 'beds':
      console.log('State-beds: ' + state.beds)
      return { ...state, beds: action.payload }
    case 'bathrooms':
      console.log('State-bathrooms: ' + state.bathrooms)
      return { ...state, bathrooms: action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function Filter() {
  // const IFilterContext = useContext(IFilterContext)

  const filterRef = useRef<HTMLDivElement>(null)

  const [state, dispatch] = useReducer(filterReducer, initialState)

  // useEffect(() => {
  //   // if (filterRef && filterRef?.current) {
  //   filterRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })
  //   // }
  // }, [])

  return (
    <FilterContext.Provider
      value={{ filterState: state, dispatchFilter: dispatch }}
    >
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
    </FilterContext.Provider>
  )
}
