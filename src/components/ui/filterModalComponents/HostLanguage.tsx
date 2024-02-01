import React from 'react'
import FilterCheckbox from './FilterCheckbox'

export default function HostingLanguage() {
  const languages = ['English', 'Japanese', 'french', 'german']
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8">
        {languages.map((item) => (
          <div key={item} className="">
            <FilterCheckbox label={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
