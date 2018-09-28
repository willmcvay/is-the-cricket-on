import * as redis from 'redis'
import * as util from 'util'
import * as cacheKeys from 'shared/constants/cache-keys'

export default () => {
  const cache = redis.createClient()

  cache.on('connect', () => {
    console.log('Redis Cache Connected')
  })

  const set = util.promisify(cache.set).bind(cache)
  const get = util.promisify(cache.get).bind(cache)

  const asyncSet = async <T>(key: keyof typeof cacheKeys, value: T) =>
    set(key as string, JSON.stringify(value))

  const asyncGet = async (key: keyof typeof cacheKeys) => get(key as string)

  return { asyncSet, asyncGet }
}
