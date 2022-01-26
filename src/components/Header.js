import React from 'react'
import logo from '../img/logo.svg'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import ButtonAsLink from './ButtonAsLink'
import { saveIsLoggedInCahe } from '../gql/utils'
import { IS_LOGGED_IN } from '../gql/query'

const HeaderBar = styled.header`
  grid-area: header;
  border: 1px dotted grey;
  display: flex;
  align-items: center;
`

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`

const UserState = styled.div`
  margin-left: auto;
  margin-right: 1em;
`

const Header = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { data, client } = useQuery(IS_LOGGED_IN)
  
  return (
    <HeaderBar>
      <img src={logo} alt="Notedly logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              localStorage.removeItem(process.env.NAME_TOKEN)
              client.resetStore()
              saveIsLoggedInCahe(client, false)
              if (location.pathname !== '/') {
                navigate('/')
              }
            }}>
            Logout
          </ButtonAsLink>
        ) : (
          <p>
            <Link to={'/signin'}>Sign In</Link> or{' '}
            <Link to={'/signup'}>Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  )
}

export default Header
