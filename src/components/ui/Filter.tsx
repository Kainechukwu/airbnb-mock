import React, { useState } from 'react'
// import FilterLinks from './FilterLinks'
import { LuSettings2 } from 'react-icons/lu'
import Switch from './Switch'
import FilterSlider from './FilterSlider'
import { Modal } from '../ui/modals'
import FilterModalComponent from '../../components/ui/filterModalComponents/Filter'

export default function Filter() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-[1700px] px-6 md:px-16 ">
      <div className=" flex items-center justify-between">
        <div className="mr-6 flex flex-1 overflow-x-auto">
          {/* <FilterLinks /> */}
          <FilterSlider />
        </div>

        <div className=" hidden gap-4 lg:flex">
          <div
            onClick={() => setModalOpen(true)}
            className="flex cursor-pointer items-center gap-2 rounded-[12px] border border-[#E1E1E1] p-4 text-xs font-semibold text-[#292929]"
          >
            <span>
              <LuSettings2 />
            </span>{' '}
            <span>Filter</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-[12px] border border-[#E1E1E1] p-4 text-xs font-semibold text-[#292929]">
            <span>Display total before taxes</span>

            <div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalOpen}
        setIsOpen={setModalOpen}
        width="sm:max-w-[800px]"
        title="Filter"
      >
        <div className="">
          <div className="relative max-h-[540px] overflow-y-auto ">
            <FilterModalComponent />
          </div>
          <div className=" flex w-full justify-between border-t border-t-gray-300 bg-white pt-4">
            <span className="text-[#222222]">Clear all</span>

            <button className="rounded-md bg-[#222222] px-6 py-3 text-white">
              {' '}
              show places
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
