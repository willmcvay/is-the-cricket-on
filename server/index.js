// @flow
import next from 'next'
import express from 'express'
import { dbInitialise } from './db'
import { cacheInitialise } from './cache'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

app.prepare().then(() => {

	dbInitialise()
  cacheInitialise()
  
  server.get('*', (req, res) => handle(req, res))
  
	server.listen(port, (err) => {
		if (err) throw err
		console.log('Server listening on port: ', port)
	})
})
