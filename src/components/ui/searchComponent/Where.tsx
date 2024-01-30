import React from 'react'
import EmptyWhereSearch from './EmptyWhereSearch'
export function closeButton(setIsOpen) {
  setIsOpen(false)
}
export default function Where() {
  return (
    <div className="flex">
      <EmptyWhereSearch />
    </div>
  )
}
