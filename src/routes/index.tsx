import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import ContactUs from '../pages/ContactUs'
import Formink from '../pages/forms/Forminkexample'

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
      },
      {
        path: paths.FORMINK,
        element: <Formink />
      }
    ]
  },

  {
    path: paths.CONTACTS,
    element: <ContactUs />
  }
])

export default router
