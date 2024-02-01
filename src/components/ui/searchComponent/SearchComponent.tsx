/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { HiOutlineSearch } from 'react-icons/hi'
import Where from './Where'
import Check from './Check'
import Who from './Who'
import { DashboardContext } from '../../../utils'
import SearchButtonOption from './SearchButtonOption'
import DashboardSearchTypes from '../DashboardSearchTypes'
import SmallSearchComponent from './SmallSearchComponent'
export default function SearchComponent() {
  const { handleSearch, isShowingBigSearch } = useContext(DashboardContext)

  //   const searchFiltersSmall = ['Anywhere', 'Any week', '  Add guest']
  const searchFilters = [
    {
      title: 'Where',
      desc: 'Search destinations'
    },
    {
      title: 'Check in',
      desc: 'Add dates'
    },
    {
      title: 'Check out',
      desc: 'Add dates'
    },
    {
      title: 'Who',
      desc: 'Add guests'
    }
  ]

  return (
    <div className="relative flex flex-col">
      <div className="mx-auto mb-8 flex max-w-max items-center justify-center xl:absolute xl:inset-x-0 xl:top-[-50px]">
        <div className={`${isShowingBigSearch ? 'flex' : 'hidden'}`}>
          <DashboardSearchTypes />
        </div>
        <div
          className={`relative top-[-11px] ${
            !isShowingBigSearch ? 'flex' : 'hidden'
          }   
          transition-opacity duration-[5000ms] ease-in-out ${
            !isShowingBigSearch ? 'opacity-100' : 'opacity-0'
          } `}
        >
          <Transition.Root show={!isShowingBigSearch} as={Fragment}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div>
                <SmallSearchComponent />{' '}
              </div>
            </Transition.Child>
          </Transition.Root>
        </div>
      </div>

      <Transition.Root show={isShowingBigSearch} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <div
              className={`${isShowingBigSearch ? 'hidden md:flex' : 'hidden'}
        transition-opacity duration-500 ease-in-out ${
          isShowingBigSearch ? 'opacity-100' : 'opacity-0'
        } searchBoxShadow relative mx-auto mb-6  w-full max-w-[850px] items-center  gap-0 rounded-[40px] border border-gray-200 bg-white`}
            >
              <div
                onClick={() => handleSearch()}
                className="absolute  right-2 z-[2] flex size-[48px] items-center justify-center rounded-full bg-[#EC4C60] text-[18px] text-white"
              >
                <HiOutlineSearch />
              </div>
              {searchFilters?.map((item, index) => (
                <div className="flex items-center" key={item.title}>
                  <div
                    className={`${
                      index == 0 ? 'hidden' : ''
                    } h-[26px] w-px bg-gray-200`}
                  ></div>
                  <SearchButtonOption item={item}>
                    <div>
                      {item.title.toLowerCase().includes('where') && <Where />}
                    </div>
                    <div>
                      {item.title.toLowerCase().includes('check') && <Check />}
                    </div>
                    <div>
                      {item.title.toLowerCase().includes('who') && <Who />}
                    </div>
                  </SearchButtonOption>
                </div>
              ))}
            </div>
          </div>
        </Transition.Child>
      </Transition.Root>
    </div>
  )
}
