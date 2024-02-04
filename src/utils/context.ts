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
  activeButton: string
  setActiveButton: (e) => void
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
  setIsShowingBigSearch: () => {},
  activeButton: '',
  setActiveButton: () => {}
})

export const DashboardContext = defaultContext

export interface IFilterContext {
  // typeOfPlace: string
  // error: string | null
  filterState: any
  dispatchFilter: any
}

export const FilterContext = createContext<IFilterContext>({
  filterState: null,
  dispatchFilter: null
})

// export function useOverviewContext() {
//   const overviewState = useContext(OverviewContext)
//   if (overviewState === undefined) {
//     throw new Error('us:eOverviewContext must be used with a dashbord context')
//   }d
//   return overviewState
// }
