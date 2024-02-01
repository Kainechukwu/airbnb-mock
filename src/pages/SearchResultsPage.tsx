import React, { useState, useEffect, useCallback } from 'react'
import { resultsData } from '../utils'
import { SearchResultCard } from '../components/ui'
import { useSearchParams } from 'react-router-dom'

export default function SearchResults() {
  const [results, setResults] = useState(resultsData)
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag')
  const where = searchParams.get('where')

  const shuffle = useCallback((array) => {
    array.sort(() => Math.random() - 0.5)
  }, [])

  useEffect(() => {
    setResults(resultsData)
    setLoading(false)
  }, [setResults, setLoading])
  useEffect(() => {
    shuffle(results)
  }, [tag, shuffle, results, where])
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`bodyHeight  px-16`}>
      <div className="3xl:grid-cols-5 mt-6 grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
        {loading && <div>...Loading</div>}
        {!loading &&
          results.map((result) => (
            <SearchResultCard key={result.id} result={result} />
          ))}
      </div>
    </div>
  )
}
