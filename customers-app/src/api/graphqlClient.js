import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const cache = new InMemoryCache()
const uri = process.env.SERVICES_URI || 'http://localhost:7000'

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: 'include',
    uri: uri + '/graphql'
  })
})
export default client
