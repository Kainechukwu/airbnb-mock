import React from 'react'
import EmptyWhereSearch from './EmptyWhereSearch'
import WhereSearchList from './WhereSearchList'
export default function Where() {
  return (
    <div className="flex flex-col h-[450px] overflow-y-auto">
      <WhereSearchList />
      <EmptyWhereSearch />
    </div>
  )
}
