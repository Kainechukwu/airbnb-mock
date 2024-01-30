import React from 'react'
import { Filter, SearchResultCard } from '../components/ui'

export default function SearchResults() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`bodyHeight  px-16`}>
      <Filter />
      <div className="mt-6 grid grid-cols-4 gap-4">
        <SearchResultCard />
      </div>
    </div>
  )
}
