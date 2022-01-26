import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import styled from 'styled-components'

const Container = styled.div`
  --gap: 0.5em;

  display: grid;
  grid-template-areas:
    'header header'
    'nav main';
  grid-template-columns: 220px 1fr;
  grid-template-rows: 64px calc(100vh - 64px - var(--gap));
  grid-gap: 0 var(--gap);
  max-width: 1080px;
  margin: 0 auto;

  border: 1px dotted blue;
`

const Main = styled.main`
  grid-area: main;
  border: 1px dotted magenta;
  overflow-y: auto;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
