// @flow
import { makeExecutableSchema } from 'graphql-tools'
import schema from './schema.graphql'
import resolvers from './resolvers'

export default makeExecutableSchema({
	typeDefs: [ schema ],
	resolvers
})
