import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
  box-shadow: 3px 3px 7px grey;
  margin-top: 1em;
`

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`

const UserForm = (props) => {
  const [values, setValues] = useState()

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Wrapper>
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          props.action({ variables: { ...values } })
        }}>
        {props.formType === 'signup' && (
          <>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={onChange}
            />
          </>
        )}
        <label htmlFor="email">Email:</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

export default UserForm
