// import Icon from '../components/ui/Icon'
import { useState, useMemo } from 'react'
import { DashboardContext } from '../utils/context'
import { Header, Footer } from '../components/ui'
import SearchResultsPage from './SearchResultsPage'
import { Filter } from '../components/ui'

import { ShowMore } from '../components/ui'
export default function Dashboard() {
  const [searchType, setSearchType] = useState('stays')
  const DashboardContextValue = useMemo(
    () => ({
      searchType,
      setSearchType
    }),
    [searchType, setSearchType]
  )
  //
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
