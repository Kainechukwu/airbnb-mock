import React from 'react'

class MiniFormik extends React.Component {
  state = {
    values: this.props.initialValues || {},
    touched: {},
    errors: {}
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    event.persist()

    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value }
    }))
  }

  handleBlur = (event) => {
    const target = event.target
    const name = target.name
    event.persist()
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [name]: true }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //validate
    //submission if no errors

    this.props.onSubmit(this.state.values)
  }
  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit
    })
  }
}
class Reservation extends React.Component {
  render() {
    return (
      <MiniFormik
        initialValues={{
          isGoing: true,
          numberOfGuests: 2
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit
          } = props
          return (
            <form
              onSubmit={handleSubmit}
              className={`flex w-full max-w-[400px] flex-col gap-1 rounded-md bg-white p-4`}
            >
              <label>
                <span className="mr-2"> Is going:</span>
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={values.isGoing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.isGoing && errors.isGoing && <span>Error</span>}
              </label>
              <br />
              <label className={`flex flex-col gap-2`}>
                <span> Number of guests:</span>
                <input
                  className={`h-[44px] rounded-md border border-gray-500 px-2`}
                  name="numberOfGuests"
                  type="number"
                  value={values.numberOfGuests}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <pre>{JSON.stringify(props, null, 2)}</pre>
              <button
                type="submit"
                className="ml-auto max-w-max rounded-md bg-blue-500 px-8 py-4 text-white"
              >
                Submit
              </button>
            </form>
          )
        }}
      </MiniFormik>
    )
  }
}

export default Reservation
