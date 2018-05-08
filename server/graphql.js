import { makeExecutableSchema } from 'graphql-tools'
import Schema from '../shared/schema'

export default makeExecutableSchema({
  typeDefs: [Schema],
  resolvers: {},
})