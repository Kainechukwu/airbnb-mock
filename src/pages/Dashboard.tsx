// import Icon from '../components/ui/Icon'
import { useState, useMemo } from 'react'
import { DashboardContext } from '../utils/context'
import { Header } from '../components/ui'
import SearchResults from './SearchResults'
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
        <div className="border-b border-gray-200">
          <Header />
        </div>
        <SearchResults />
      </div>
    </DashboardContext.Provider>
  )
}
