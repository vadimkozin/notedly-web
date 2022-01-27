import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import styled from 'styled-components'

const Container = styled.div`
  --gap: 0.5em;
  max-width: 1080px;
  margin: 0 auto;


  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      'header header'
      'nav main';
    grid-template-columns: 220px 1fr;
    grid-template-rows: 64px calc(100vh - 64px - var(--gap));
    grid-gap: 0 var(--gap);
    border: 1px solid grey;
    border-radius: 0.25em;
  }
`

const Wrapper = styled.div`

  margin-left: 1em;
  margin-right: 1em;
`

const Main = styled.main`
  grid-area: main;
  margin-top: 1em;
  overflow-y: auto;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Navigation />
        <Main>{children}</Main>
      </Container>
    </Wrapper>
  )
}

export default Layout
