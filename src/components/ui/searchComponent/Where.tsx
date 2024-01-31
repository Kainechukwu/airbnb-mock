import React, { useContext } from 'react'
import EmptyWhereSearch from './EmptyWhereSearch'
import WhereSearchList from './WhereSearchList'
import { DashboardContext, staticLocationOptions } from '../../../utils'

export default function Where() {
  const { whereValue } = useContext(DashboardContext)
  const wherevalueIsInDefaultList = staticLocationOptions.some(
    (option) => option.name === whereValue
  )

  return (
    <div className="flex h-[450px] flex-col overflow-y-auto">
      {/* {whereValue} {wherevalueIsInDefaultList ? 'true' : 'false'} */}
      {wherevalueIsInDefaultList || whereValue?.length == 0 ? (
        <EmptyWhereSearch />
      ) : (
        <WhereSearchList />
      )}
    </div>
  )
}
