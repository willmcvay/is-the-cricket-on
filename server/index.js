// @flow
import next from 'next'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cacheInitialise from './cache'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const cache = cacheInitialise

app.prepare().then(() => {
	server.get('*', (req, res) => handle(req, res))
	server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
	server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

	server.listen(port, (err) => {
		if (err) throw err
		console.log('Server listening on port: ', port)
	})
})

export { cache }
