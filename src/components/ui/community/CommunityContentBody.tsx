import React, { useEffect, useState } from 'react'
import CommunityBodyOption from './CommunityBodyOption'
import { languageOptions, currencyOptions } from '../../../utils'
import Switch from '../Switch'

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
      {selected?.toLowerCase() !== 'currency' && (
        <div className="mb-10 flex cursor-pointer items-center gap-2 rounded-[12px] bg-[#F7F7F7]  p-4 ">
          <div className="mr-2 flex flex-col items-start">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-base text-[#222222]">Translation</span>
              <img
                className="size-[24px]"
                src="/currencycommunityimg.png"
                alt=""
              />
            </div>
            <span className="text-sm text-[#7F7F7F]">
              Automatically translate descriptions and reviews to English
            </span>
          </div>

          <div>
            <Switch />
          </div>
        </div>
      )}
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
