import { createContext, useContext } from 'react'

// Overview context
// interface IOverviewContext {
//   name: string
// }

// export const defaultOverviewContext = {
//   name: ''
// }

// export const OverviewContext = createContext<IOverviewContext>(
//   defaultOverviewContext
// )

// or

interface IOverviewContext {
  name: string
}
export const defaultOverviewContext = {
  name: ''
}

export const OverviewContext = createContext<undefined | IOverviewContext>(
  undefined
)

export function useOverviewContext() {
  const overviewState = useContext(OverviewContext)
  if (overviewState === undefined) {
    throw new Error('useOverviewContext must be used with a dashbord context')
  }

  return overviewState
}
