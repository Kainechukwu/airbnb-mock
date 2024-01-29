import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import ContactUs from '../pages/ContactUs'
// import Team from '../pages/Team'
// import Documents from '../pages/Documents'
// import Profile from '../pages/Profile'

// import Reports from '../pages/Reports'

import Dashboard from '../pages/Dashboard'
// import BaseLayout from 'layouts/BaseLayout'
import Root, { loader as rootLoader } from '../routes/root'
import paths from './paths'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: paths.DASHBOARD,
        element: <Dashboard />
      }
      // {
      //   path: paths.TEAMS,
      //   element: <Team />
      // },
      // {
      //   path: paths.DOCUMENTS,
      //   element: <Documents />
      // },
      // {
      //   path: paths.REPORTS,
      //   element: <Reports />
      // },
      // {
      //   path: paths.PROFILE,
      //   element: <Profile />
      // }
    ]
  },

  {
    path: paths.CONTACTS,
    element: <ContactUs />
  }
])

export default router
