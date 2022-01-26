import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { saveIsLoggedInCahe } from '../gql/utils'
import UserForm from '../components/UserForm'
import { SIGNIN_USER } from '../gql/mutation'

const SignIn = (props) => {
  useEffect(() => {
    document.title = 'Sign In - Notedly'
  })

  const navigate = useNavigate()
  const client = useApolloClient()

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem(process.env.NAME_TOKEN, data.signIn)
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
      <UserForm action={signIn} formType="signin" />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message} Try again</p>}
    </>
  )
}

export default SignIn
