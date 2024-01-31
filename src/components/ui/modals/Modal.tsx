/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { LiaTimesSolid } from 'react-icons/lia'
export default function Modal({
  open,
  setIsOpen,
  children,
  width = 'sm:max-w-[1034px]'
}: {
  open: boolean
  setIsOpen: (e) => void
  children: any
  width?: string
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[1000000] " onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#222222] bg-opacity-[0.65] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[1000000]  w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`${width} relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full  sm:p-6`}
              >
                <div>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-[#222222]"
                  >
                    <LiaTimesSolid />
                  </span>

                  <div className="mt-3 text-center sm:mt-5">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
