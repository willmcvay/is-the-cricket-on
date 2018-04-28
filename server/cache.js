import redis from 'redis'

export const cache = redis.createClient()

export const cacheInitialise = () =>
	cache.on('connect', function() {
		console.log('Redis client connected')
	})
