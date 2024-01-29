import { Outlet } from 'react-router-dom'
import { getReports } from '../pages/Reports'

export async function loader() {
  const reports = await getReports()
  return { reports }
}

export default function BaseLayout() {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
