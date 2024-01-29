import React from 'react'
import { debounce } from 'lodash'

export async function getReports() {
  try {
    const reportsArr = [
      { id: 1, text: 'Good report' },
      { id: 2, text: 'Bad report' }
    ]
    debounce(() => console.log(reportsArr), 3000)

    return reportsArr
  } catch (err) {
    console.log(err)
  }
}
export default function Reports() {
  return <div>Reports</div>
}
