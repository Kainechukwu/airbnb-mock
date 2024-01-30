// import Icon from '../components/ui/Icon'
import { useState, useMemo } from 'react'
import { DashboardContext } from '../utils/context'
import { Header, Footer } from '../components/ui'
import SearchResultsPage from './SearchResultsPage'
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
        <div className="sticky top-0  z-[1000000] border-b border-gray-200 bg-white">
          <Header />
        </div>
        <SearchResultsPage />
        <ShowMore />
        <Footer />
      </div>
    </DashboardContext.Provider>
  )
}
