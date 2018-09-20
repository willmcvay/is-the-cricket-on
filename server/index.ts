import 'dotenv/config'
import 'isomorphic-unfetch'
import * as next from 'next'
import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cacheInitialise from './cache'
import typeDefs from '../shared/graphql/type-defs'
import resolvers from '../shared/graphql/resolvers'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const app = next({ dev })
const handle = app.getRequestHandler()
const serverApp = express()
const serverApollo = new ApolloServer({ typeDefs, resolvers });
const cache = cacheInitialise()

app.prepare().then(() => {
  serverApollo.applyMiddleware({app: serverApp})
  serverApp.get('*', (req, res) => handle(req, res))
  serverApp.listen(port, (err) => {
    if (err) throw err
    console.log('Server listening on port: ', port, '🚀')
  })
})

export { cache }
