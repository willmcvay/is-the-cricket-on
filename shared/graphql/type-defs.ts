import * as fs from 'fs'
import * as path from 'path'
import { DocumentNode } from 'graphql'

const schemaFile = path.join(__dirname, 'schema.graphql')
const typeDefs: DocumentNode = fs.readFileSync(schemaFile, 'utf8') as any

export default typeDefs
