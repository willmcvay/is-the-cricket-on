import fetchMock from 'fetch-mock'
import { BASE_API_URL } from '../../../shared/constants/api-constants'
import stubMatchDetails from '../../api/__stubs__/match-details'
import { get } from '../fetcher'

const testURL = 'some/url/'
const testQuery = '?=someQuery'

describe('fetcher', () => {
  it('should correctly call the global fetch from the get module and return a 200 response', async () => {
    fetchMock.mock(`${BASE_API_URL}${testURL}${testQuery}`, {
      status: 200,
      body: stubMatchDetails
    })

    const actual = await get(testURL, testQuery)

    expect(actual).toEqual(stubMatchDetails)
  })

  it('should correctly call fetch and catch a network error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    fetchMock.mock(`${BASE_API_URL}${testURL}${testQuery}`, {
      status: 400,
      body: null
    })

    await get(testURL, testQuery)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith('API ERROR: ERROR FETCHING {"size":0,"timeout":0}')
  })

  afterEach(() => {
    fetchMock.restore()
  })
})
