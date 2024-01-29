import React from 'react'
import { signal, computed } from '@preact/signals-react'
// const profileInfo = signal({
//   name: 'Kaine',
//   email: ''
// })

const email = signal('')
const count = signal(0)
const emailGreeting = computed(() => email.value && `Hello ${email.value}`)

export default function Profile() {
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email.value = e.target.value
  }
  const countChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    count.value = e.target.valueAsNumber
  }
  const value = count.value + 1
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        <span className="my-4">{emailGreeting.value}</span>
        <div className="mt-5 grid max-w-[900px] grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email <span className="ml-4">{email.value}</span>
            </label>
            <div className="mt-2">
              <input
                value={email.value}
                onChange={emailChange}
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Count <span className="ml-4">{value}</span>
            </label>
            <div className="mt-2">
              <input
                value={count.value}
                onChange={countChange}
                type="number"
                name="number"
                id="email"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
