import { createContext } from 'react'

interface IOverviewContext {
  name: string
}
export const OverviewContext = createContext<undefined | IOverviewContext>(
  undefined
)

interface IDashboardContext {
  contextName?: string
  searchType: string | null
  setSearchType: (e) => void
}

const defaultContext = createContext<IDashboardContext>({
  contextName: 'Dashboard',
  searchType: null,
  setSearchType: () => {}
})

export const DashboardContext = defaultContext

// export function useOverviewContext() {
//   const overviewState = useContext(OverviewContext)
//   if (overviewState === undefined) {
//     throw new Error('useOverviewContext must be used with a dashbord context')
//   }

//   return overviewState
// }
