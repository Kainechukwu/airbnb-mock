import React, { useEffect, useState } from 'react'
import CommunityBodyOption from './CommunityBodyOption'
import { languageOptions, currencyOptions } from '../../../utils'
export default function CommunityContentBody({
  selected
}: {
  selected?: string
}) {
  const languageHeadingText = 'Choose a language and region'
  const [headingText, setHeadingText] = useState(languageHeadingText)
  const [options, setOptions] = useState(languageOptions)
  const [selectedOption, setSelectedOption] = useState(options[0])

  useEffect(() => {
    if (selected?.toLowerCase() == 'currency') {
      setHeadingText('Choose a currency')
      setOptions(currencyOptions)
    } else {
      {
        setHeadingText(languageHeadingText)
        setOptions(languageOptions)
      }
    }
  }, [selected, setHeadingText, setOptions])
  return (
    <div className="mt-10 flex flex-col items-start justify-start pb-4">
      <span className="mb-4 text-[20px] font-medium text-[#222222]">
        {headingText}
      </span>

      <div className="grid w-full grid-cols-5 gap-x-6 gap-y-4">
        {options?.map((option) => (
          <div key={option.id} onClick={() => setSelectedOption(option)}>
            <CommunityBodyOption
              item={option}
              selected={selectedOption.id == option.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
