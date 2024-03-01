import React from 'react'
import MiniFormink from '../../components/forms/MiniFormik.jsx'
// import ForminkExample from '../../components/forms/ForminkExample.jsx'
import InviteFriendsForm from '../../components/forms/InviteFriendsForm.jsx'

export default function Forminkexample() {
  return (
    <div className={`bg-[#010A2A] min-h-[100vh] px-6 py-12`}>
      <div className={`bg-[#010A2A] min-h-[100vh] px-6 py-12`}>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          <div className="border border-blue-600 rounded-lg p-6">
            <div className="flex flex-col gap-3">
              <span className="text-lg text-white mb-3">Formink Example</span>
              <MiniFormink />
            </div>
          </div>
          {/* <div className="">
          <ForminkExample />
        </div> */}

          <div className="border border-blue-600 rounded-lg p-6">
            <InviteFriendsForm />
          </div>
        </div>
      </div>
    </div>
  )
}
