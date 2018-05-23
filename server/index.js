// @flow
import 'dotenv/config'
import next from 'next'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cacheInitialise from './cache'
import schema from './graphql'
import { getUpcomingMatches } from './api/upcomingMatches'
console.log(process.env.API_KEY)

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const cache = cacheInitialise

app.prepare().then(() => {
	server.get('*', (req, res) => handle(req, res))
	server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
	// server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
	// getUpcomingMatches()
	server.listen(port, (err) => {
		if (err) throw err
		console.log('Server listening on port: ', port)
	})
})

export { cache }
