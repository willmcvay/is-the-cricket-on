import * as cacheKeys from '../../shared/constants/cache-keys'
import * as cacheExpiries from '../../shared/constants/cache-expiries'
import { Query } from '../../shared/types/queries'
import { cache } from '../index'
import { get } from '../utils/fetcher'
import { unixNow, cacheTimeExpired, unixDiffNow } from '../../shared/utils/time'
import { stringMapToQuery } from '../../shared/utils/data'
import { UtilityTypes } from '../../shared/types/utility'

const dataGetter = async (
  API_KEY: string,
  CACHE_KEY: keyof typeof cacheKeys,
  query?: UtilityTypes.StringMap
): Promise<Query | undefined> => {
  const queryString = query ? stringMapToQuery(query) : ''

  try {
    const cached = await cache.asyncGet(CACHE_KEY, queryString)
    if (cached) {
      const parsedCache = JSON.parse(cached)
      const { cacheExpiry } = parsedCache
      const cacheValid =
        cacheExpiry && !cacheTimeExpired(unixDiffNow(cacheExpiry), cacheExpiries[CACHE_KEY])

      if (cacheValid) {
        console.log(`DATA FETCHED FROM CACHE FOR ${API_KEY}${queryString} ${CACHE_KEY}`)
        return parsedCache
      }
    }

    const response = await get<Query>(API_KEY, queryString)
    const timeStampedResponse = { ...response, cacheExpiry: unixNow() }
    await cache.asyncSet(CACHE_KEY, queryString, timeStampedResponse)
    console.log(`DATA FETCHED FROM API AND CACHED FOR  ${API_KEY}${queryString} ${CACHE_KEY}`)
    return response
  } catch (err) {
    console.error(`ERROR GETTING DATA FOR ${API_KEY} ${CACHE_KEY}`)
  }
}

export default dataGetter
