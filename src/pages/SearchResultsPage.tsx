import React, { useState, useEffect, useCallback } from 'react'
import { resultsData } from '../utils'
import { Filter, SearchResultCard } from '../components/ui'
import { useSearchParams } from 'react-router-dom'

export default function SearchResults() {
  const [results, setResults] = useState(resultsData)
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag')

  const shuffle = useCallback((array) => {
    array.sort(() => Math.random() - 0.5)
  }, [])

  useEffect(() => {
    setResults(resultsData)
    setLoading(false)
  }, [setResults, setLoading])
  useEffect(() => {
    shuffle(results)
  }, [tag, shuffle, results])
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`bodyHeight  px-16`}>
      <Filter />
      <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10">
        {loading && <div>...Loading</div>}
        {!loading &&
          results.map((result) => (
            <SearchResultCard key={result.id} result={result} />
          ))}
      </div>
    </div>
  )
}
