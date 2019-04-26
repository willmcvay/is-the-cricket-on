import 'dotenv/config'
import 'isomorphic-unfetch'
import * as next from 'next'
import * as express from 'express'
import { join } from 'path'
import { parse } from 'url'
import { ApolloServer } from 'apollo-server-express'
import cacheInitialise from './utils/initialise-cache'
import typeDefs from '../shared/graphql/type-defs'
import resolvers from '../shared/graphql/resolvers'
import pageCache from './utils/page-cache'
import { MATCH_LIST, HOME, MATCH_DETAILS } from '../shared/constants/routes'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const app = next({ dev })
const handle = app.getRequestHandler()
const serverApp = express()
const serverApollo = new ApolloServer({ typeDefs, resolvers })
const cache = cacheInitialise()

app
  .prepare()
  .then(() => {
    serverApollo.applyMiddleware({ app: serverApp })

    serverApp.get(HOME, (req: express.Request, res: express.Response) => {
      pageCache(req, res, app, HOME).catch(err => console.error(err.message))
    })

    serverApp.get(MATCH_LIST, (req: express.Request, res: express.Response) => {
      pageCache(req, res, app, MATCH_LIST, req.query).catch(err => console.error(err.message))
    })

    serverApp.get(MATCH_DETAILS, (req: express.Request, res: express.Response) => {
      pageCache(req, res, app, MATCH_DETAILS, req.query).catch(err => console.error(err.message))
    })

    serverApp.get('*', (req: express.Request, res: express.Response) => {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '..', '..', pathname)
        app.serveStatic(req, res, filePath).catch(err => console.error(err.message))
      } else {
        handle(req, res, req.url as any).catch(err => console.error(err.message))
      }
    })
    serverApp.listen(port, (err: Error) => {
      if (err) throw err
      console.log(`Server listening on port: ${port} 🚀`)
    })
  })
  .catch(err => {
    console.log(err.message)
  })

export { cache }
