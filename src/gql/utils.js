import { gql } from '@apollo/client'

const saveIsLoggedInCahe = (client, flag) =>
  client.writeQuery({
    query: gql`
      query GetIsLoggedIn {
        isLoggedIn
      }
    `,
    data: {
      isLoggedIn: flag,
    },
  })

export { saveIsLoggedInCahe }
