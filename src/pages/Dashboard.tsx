// import Icon from '../components/ui/Icon'
import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
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
  const headerRef = useRef(null)
  const [activeButton, setActiveButton] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [searchType, setSearchType] = useState('stays')
  const [search, setSearch] = useState('')
  const [locationList, setLocationList] = useState<any[]>([])
  const [whereValue, setWhereValue] = useState('')
  const [isShowingBigSearch, setIsShowingBigSearch] = useState(true)
  const tag = searchParams.get('tag')

  const [who, setWho] = useState({ adult: 0, children: 0, infant: 0, pet: 0 })
  const [checkingDates, setCheckingDates] = useState({
    from: null,
    to: null
  })
  const handleSearch = useCallback(() => {
    const string = `/?tag=${tag}&${constructUrlParams({
      ...who,
      where: whereValue,
      from: checkingDates.from,
      to: checkingDates.to
    })}`
    console.log(string)

    // navigate(string)
    setSearch(string)
  }, [tag, who, whereValue, checkingDates])

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
      setLocationList,
      isShowingBigSearch,
      setIsShowingBigSearch,
      activeButton,
      setActiveButton,
      checkingDates,
      setCheckingDates
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
      setLocationList,
      isShowingBigSearch,
      setIsShowingBigSearch,
      activeButton,
      setActiveButton,
      checkingDates,
      setCheckingDates
    ]
  )
  const handleHeaderIntersection = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        setIsShowingBigSearch(false)
        console.log('Header is no longer in the viewport')
      } else {
        setIsShowingBigSearch(true)
        console.log('Header is still in the viewport or is intersecting')
      }
    })
  }

  useEffect(() => {
    const headerElement = headerRef.current

    if (!headerElement) return

    const headerObserver = new IntersectionObserver(handleHeaderIntersection, {
      threshold: 0.5
    })

    headerObserver.observe(headerElement)

    // Cleanup the observer when the component is unmounted
    return () => {
      headerObserver.disconnect()
    }
  }, [])

  return (
    <DashboardContext.Provider value={DashboardContextValue}>
      <div className="size-full">
        <div
          ref={headerRef}
          className="hidden items-center justify-center border-b border-b-[#E8E8E8] bg-[#F7F7F7] md:flex"
        >
          <span className="px-6 pb-4 pt-6 text-base font-medium text-[#222222] underline">
            Learn about Guest Favorites, the most loved homes on Airbnb
          </span>
        </div>
        <div id="myHeader" className="sticky top-0 z-[10000]    bg-white">
          <div className="bg-white ">
            <Header />
            <Filter />
          </div>
        </div>
        <div className="mx-auto max-w-[1700px]">
          <SearchResultsPage />
          <ShowMore />
        </div>
        <Footer />
      </div>
    </DashboardContext.Provider>
  )
}
