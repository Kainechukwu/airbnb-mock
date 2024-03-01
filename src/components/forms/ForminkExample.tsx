import React, { useState } from 'react'
import { useFormik } from 'formik'

export default function ForminkExample() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // const [state] = useState()
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  });
  return (
    <form
      className={`flex w-full max-w-[400px] flex-col gap-1 rounded-md bg-white p-4 mt-4`}
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button
        type="submit"
        className="ml-auto max-w-max rounded-md bg-blue-500 px-8 py-4 text-white"
      >
        Submit
      </button>
    </form>
  )
}
