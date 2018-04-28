// @flow

import redis from 'redis'

export const cache = redis.createClient()

export const cacheInitialise = () =>
	cache.on('connect', () => {
		console.log('Redis Cache Connected')
	})
