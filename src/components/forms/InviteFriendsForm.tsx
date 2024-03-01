import React, { Fragment } from 'react'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import FormDebug from '../../components/FormDebug'
const initialValues = {
  friends: [
    {
      name: '',
      email: ''
    }
  ]
}

export default function InviteFriendsForm() {
  return (
    <div>
      <span className="text-lg text-white"> Invite Friends Form</span>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 500)
        }}
      >
        {(form) => (
          <Form className="flex flex-col gap-2 text-white">
            {/* //Array */}
            {/* //Must be the name of the array in this case "friends" */}
            <FieldArray name="friends">
              {({ push, remove }) => (
                <Fragment>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex  flex-col items-start gap-8">
                      {/* //Fields */}
                      {form?.values?.friends?.map((friend, index) => (
                        <div key={index} className="flex w-full  gap-4">
                          <div className="grid w-full grid-cols-2 gap-4">
                            <div className="">
                              <Field
                                className="w-full rounded-md border border-gray-400 bg-transparent p-2"
                                name={`friends[${index}].name`}
                              >
                                {({ field, form }) => (
                                  <input
                                    className="w-full rounded-md border border-gray-400 bg-transparent p-2"
                                    {...field}
                                    type="text"
                                    placeholder="Jane Doe"
                                  />
                                )}
                              </Field>
                            </div>
                            <div className="">
                              <Field
                                className="w-full rounded-md border border-gray-400 bg-transparent p-2"
                                name={`friends[${index}].email`}
                                type="email"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => remove(index)}
                            type="button"
                            className="ml-auto max-w-max rounded-md border border-gray-400 bg-transparent px-6 py-2 text-white hover:opacity-75"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        push({
                          name: '',
                          email: ''
                        })
                      }
                      type="button"
                      className="ml-auto w-full rounded-md border border-gray-400 bg-transparent px-8 py-4 text-[18px] text-white hover:opacity-75"
                    >
                      Add Friend
                    </button>
                  </div>
                </Fragment>
              )}
            </FieldArray>

            <div className="mt-6 flex flex-col gap-4">
              <button
                type="submit"
                disabled={form?.isSubmitting}
                className="ml-auto w-full rounded-md bg-blue-500 px-8 py-4 text-[18px] text-white"
              >
                Submit
              </button>
            </div>

            <FormDebug form={form} />
          </Form>
        )}
      </Formik>
    </div>
  )
}
