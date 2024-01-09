import React from 'react'
export async function getContacts() {
  const contactArr = [
    { id: 1, name: 'Kaine' },
    { id: 2, name: 'Hanzo' }
  ]
  try {
    return contactArr
  } catch (err) {
    console.log(err)
  }
}
export default function ContactUs() {
  return <div>ContactUs</div>
}
