import { getMatchDetails } from '../match-details'
import * as dataGetter from '../../utils/data-getter'
import { DETAILS } from '../../../shared/constants/api-keys'
import { MATCH_DETAILS } from '../../../shared/constants/cache-keys'

jest.mock('../../utils/data-getter')

describe('getMatchDetails', () => {
  it('should call dataGetter with correct params', () => {
    const query = {
      seriesid: 'SOME_ID',
      matchid: 'SOME_ID'
    }

    getMatchDetails(query).catch(e => console.error(JSON.stringify(e)))

    expect(dataGetter.default).toHaveBeenCalledTimes(1)
    expect(dataGetter.default).toHaveBeenCalledWith(DETAILS, MATCH_DETAILS, query)
  })
})
