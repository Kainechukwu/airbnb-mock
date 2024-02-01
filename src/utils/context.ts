import { createContext } from 'react'

interface IOverviewContext {
  name: string
}
export const OverviewContext = createContext<undefined | IOverviewContext>(
  undefined
)

type ListType = {
  id: number
  name: string
}

interface IDashboardContext {
  contextName?: string
  searchType: string | null
  setSearchType: (e) => void
  who: any | null
  setWho: (e) => void
  search: string | null
  setSearch: (e) => void
  handleSearch: () => void
  whereValue: string | number
  setWhereValue: (e) => void
  locationList: Array<ListType>
  setLocationList: (e) => void
  isShowingBigSearch: boolean
  setIsShowingBigSearch: (e) => void
}

const defaultContext = createContext<IDashboardContext>({
  contextName: 'Dashboard',
  searchType: null,
  setSearchType: () => {},
  who: {},
  setWho: () => {},
  search: null,
  setSearch: () => {},
  handleSearch: () => {},
  whereValue: '',
  setWhereValue: () => {},
  locationList: [],
  setLocationList: () => {},
  isShowingBigSearch: false,
  setIsShowingBigSearch: () => {}
})

export const DashboardContext = defaultContext

// export function useOverviewContext() {
//   const overviewState = useContext(OverviewContext)
//   if (overviewState === undefined) {
//     throw new Error('useOverviewContext must be used with a dashbord context')
//   }

//   return overviewState
// }
