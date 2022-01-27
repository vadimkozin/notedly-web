import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from 'apollo-link-context'
import GlobalStyle from './components/GlobalStyle'
import Pages from './pages'
import { saveIsLoggedInCahe } from './gql/utils'

const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem(process.env.NAME_TOKEN) || '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
})

const isLoggedIn = !!localStorage.getItem(process.env.NAME_TOKEN)

// записываем кэшированные данные при начальной загрузке
saveIsLoggedInCahe(client, isLoggedIn)

// записываем данные кэша после его сброса
client.onResetStore(() => saveIsLoggedInCahe(client, isLoggedIn))

const App = () => {
  return (
    <>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Pages />
        </ApolloProvider>
      </React.StrictMode>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
