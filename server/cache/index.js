// @flow

import redis from 'redis'

const cache = redis.createClient()

cache.on('connect', () => {
	console.log('Redis Cache Connected')
})

export default cache