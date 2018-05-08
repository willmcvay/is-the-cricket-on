// @flow

import redis from 'redis'

export default redis.createClient()

cache.on('connect', () => {
	console.log('Redis Cache Connected')
})
