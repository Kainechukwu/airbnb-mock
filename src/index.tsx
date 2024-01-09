// import { createRoot } from 'react-dom/client'
// import { createContext } from 'react'
// import React, { StrictMode } from 'react'
// import { RouterProvider } from 'react-router-dom'
// import 'tailwindcss/tailwind.css'
// import router from './routes'
// import { createAppState } from './utils'

// // import App from 'components/App'

// const AppState = createContext<unknown>(null)
// const container = document.getElementById('root') as HTMLDivElement
// const root = createRoot(container)

// function AppProvider({
//   children
// }: {
//   children: string | JSX.Element | JSX.Element[]
// }) {
//   return (
//     <AppState.Provider value={createAppState()}>{children}</AppState.Provider>
//   )
// }

// root.render(
//   <AppProvider>
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   </AppProvider>
// )

import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import router from './routes'
// import { createAppState } from './utils'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
