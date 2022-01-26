import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 1em;
  background-color: #f5f4f0;

  grid-area: nav;
  border: 1px dotted green;
  overflow-y: auto;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`

const Img = styled.span`
  margin-right: 4px;
`
const Item = ({ children }) => {
  return (
    <Img aria-hidden="true" role="img">
      {children}
    </Img>
  )
}

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">
            <Item>🏠</Item>Home
          </Link>
        </li>
        <Link to="/mynotes">
          <Item>📓</Item>My Notes
        </Link>
        <li>
          <Link to="/favorites">
            <Item>🌟</Item>Favorites
          </Link>
        </li>
        <li>
          <Link to="/new">
            <Item>➕</Item>New
          </Link>
        </li>
      </NavList>
    </Nav>
  )
}

export default Navigation
