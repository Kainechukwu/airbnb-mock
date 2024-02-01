import React, { useState } from 'react'
import HeaderMenu from '../ui/HeaderMenu'
import { TbWorld } from 'react-icons/tb'
import { SearchComponent } from '../ui'
import { Modal } from '../ui/modals'
import { CommunityContent } from '../ui'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="flex flex-col border-b border-gray-200">
      <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-6 py-[16px]  md:px-16">
        <div className="h-[41px] w-[121px]">
          <img
            className="size-full"
            src="/AirbnbLogo-removebg-preview.png"
            alt=""
          />
        </div>

        <div className="flex items-center gap-[24px]">
          <span className="text-[#222222]">Airbnb your home</span>
          <span
            onClick={() => setModalOpen(true)}
            className=" cursor-pointer rounded-full p-2 text-[18px] hover:bg-[#F7F7F7]"
          >
            {' '}
            <TbWorld />
          </span>
          <HeaderMenu />
        </div>
      </div>
      <SearchComponent />
      <Modal open={modalOpen} setIsOpen={setModalOpen}>
        <CommunityContent />
      </Modal>
    </div>
  )
}
