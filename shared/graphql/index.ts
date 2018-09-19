// @flow
import { makeExecutableSchema } from 'graphql-tools'
import * as fs from 'fs';
import * as path from 'path';
// import schema from './schema.graphql'
import resolvers from './resolvers'

const schemaFile = path.join(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
