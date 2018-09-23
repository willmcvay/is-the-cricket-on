import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { GRAPHQL_API } from '../../shared/constants/api-constants'

export default withApollo(() => new ApolloClient({ uri: GRAPHQL_API }))
