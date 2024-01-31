// import Icon from '../components/ui/Icon'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { DashboardContext, constructUrlParams, locationOptions } from '../utils'
import { Header, Footer } from '../components/ui'
import SearchResultsPage from './SearchResultsPage'
import { Filter } from '../components/ui'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { ShowMore } from '../components/ui'

// Example usage:
// const inputObject: TravelParams = { adult: 2, children: 0, infant: 1, pet: 0 }
// const urlParams: string = constructUrlParams(inputObject)

export default function Dashboard() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [searchType, setSearchType] = useState('stays')
  const [search, setSearch] = useState('')
  const [locationList, setLocationList] = useState<any[]>([])
  const [whereValue, setWhereValue] = useState('')

  const tag = searchParams.get('tag')

  const [who, setWho] = useState({ adult: 0, children: 0, infant: 0, pet: 0 })

  const handleSearch = useCallback(() => {
    const string = `/?tag=${tag}&${constructUrlParams(who)}`
    console.log(string)

    // navigate(string)
    setSearch(string)
  }, [tag, who])

  useEffect(() => {
    navigate(search)
  }, [search, navigate])

  const handleLocationFilter = useCallback(() => {
    if (whereValue.length > 0) {
      setLocationList(locationOptions)
    } else {
      setLocationList([])
      return
    }
  }, [whereValue.length])

  useEffect(() => {
    handleLocationFilter()
  }, [handleLocationFilter])
  //
  const DashboardContextValue = useMemo(
    () => ({
      searchType,
      setSearchType,
      who,
      setWho,
      search,
      setSearch,
      handleSearch,
      whereValue,
      setWhereValue,
      locationList,
      setLocationList
    }),
    [
      searchType,
      setSearchType,
      who,
      setWho,
      search,
      setSearch,
      handleSearch,
      whereValue,
      setWhereValue,
      locationList,
      setLocationList
    ]
  )
  return (
    <DashboardContext.Provider value={DashboardContextValue}>
      <div className="size-full">
        <div className="flex items-center justify-center border-b border-b-[#E8E8E8] bg-[#F7F7F7]">
          <span className="px-6 pb-4 pt-6 text-base font-medium text-[#222222] underline">
            Learn about Guest Favorites, the most loved homes on Airbnb
          </span>
        </div>
        <div className="sticky top-0  z-[10000]  bg-white">
          <Header />
          <Filter />
        </div>
        <SearchResultsPage />
        <ShowMore />
        <Footer />
      </div>
    </DashboardContext.Provider>
  )
}
