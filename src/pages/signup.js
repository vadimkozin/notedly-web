import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { saveIsLoggedInCahe } from '../gql/utils'
import UserForm from '../components/UserForm'
import { SIGNUP_USER } from '../gql/mutation'

const SignUp = (props) => {
  useEffect(() => {
    document.title = 'Sign Up - Notedly'
  })

  const navigate = useNavigate()
  const client = useApolloClient()

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem(process.env.NAME_TOKEN, data.signUp)
      saveIsLoggedInCahe(client, true)
      navigate('/')
    },
    onError: (error) => {
      // ['graphQLErrors', 'clientErrors', 'networkError', 'message', 'extraInfo']
      console.log(`error.message:`, error.message)
    },
  })

  return (
    <>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing up! ({error.message})</p>}
    </>
  )
}

export default SignUp
