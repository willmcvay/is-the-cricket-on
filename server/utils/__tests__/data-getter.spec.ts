import dataGetter from '../data-getter'
import { cache } from '../../index'
import stubMatchDetails from '../../api/__stubs__/match-details'
import { DETAILS } from '../../../shared/constants/api-keys'
import { MATCH_DETAILS } from '../../../shared/constants/cache-keys'
import * as fetcher from '../fetcher'
import { stringMapToQuery } from '../../../shared/utils/data'

jest.mock('../../index')
jest.mock('../fetcher')

const asyncGet = cache.asyncGet as jest.Mock
const asyncSet = cache.asyncSet as jest.Mock
const get = fetcher.get as jest.Mock
const validCache = JSON.stringify({
  cacheExpiry: Date.now() / 1000,
  ...stubMatchDetails
})
const newCache = {
  cacheExpiry: Math.floor(Date.now() / 1000),
  ...stubMatchDetails
}
const invalidCache = JSON.stringify({
  cacheExpiry: 0,
  ...stubMatchDetails
})
const query = {
  seriesid: 'SOME_ID',
  matchid: 'SOME_ID'
}
const queryString = stringMapToQuery(query)

describe('dataGetter', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should return a cached value if there is a valid cache', async () => {
    asyncGet.mockReturnValue(validCache)

    const res = await dataGetter(DETAILS, MATCH_DETAILS, query)

    expect(asyncGet).toHaveBeenCalledTimes(1)
    expect(asyncGet).toHaveBeenCalledWith(MATCH_DETAILS, queryString)
    expect(get).not.toHaveBeenCalled()
    expect(res).toEqual(JSON.parse(validCache))
  })

  it('should refresh the cache and return the new value if cache is invalid', async () => {
    asyncGet.mockReturnValue(invalidCache)
    get.mockReturnValue(stubMatchDetails)

    const res = await dataGetter(DETAILS, MATCH_DETAILS, query)

    expect(asyncGet).toHaveBeenCalledTimes(1)
    expect(asyncGet).toHaveBeenCalledWith(MATCH_DETAILS, queryString)

    expect(get).toHaveBeenCalledTimes(1)
    expect(get).toHaveBeenCalledWith(DETAILS, queryString)

    expect(asyncSet).toHaveBeenCalledTimes(1)
    expect(asyncSet).toHaveBeenCalledWith(MATCH_DETAILS, queryString, newCache)

    expect(res).toEqual(stubMatchDetails)
  })

  it('should refresh the cache and return the new value if no cache present', async () => {
    asyncGet.mockReturnValue(undefined)
    get.mockReturnValue(stubMatchDetails)

    const res = await dataGetter(DETAILS, MATCH_DETAILS, query)

    expect(asyncGet).toHaveBeenCalledTimes(1)
    expect(asyncGet).toHaveBeenCalledWith(MATCH_DETAILS, queryString)

    expect(get).toHaveBeenCalledTimes(1)
    expect(get).toHaveBeenCalledWith(DETAILS, queryString)

    expect(asyncSet).toHaveBeenCalledTimes(1)
    expect(asyncSet).toHaveBeenCalledWith(MATCH_DETAILS, queryString, newCache)

    expect(res).toEqual(stubMatchDetails)
  })
})
