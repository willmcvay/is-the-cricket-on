import * as redis from 'redis'

export default () => {
  const cache = redis.createClient()

  cache.on('connect', () => {
    console.log('Redis Cache Connected')
  })

  return cache
}
