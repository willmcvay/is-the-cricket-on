import { getScorecardDetails } from '../scorecard-details'
import * as dataGetter from '../../utils/data-getter'
import { SCORECARDS } from '../../../shared/constants/api-keys'
import { SCORECARD_CACHE } from '../../../shared/constants/cache-keys'

jest.mock('../../utils/data-getter')

describe('getScorecardDetails', () => {
  it('should call dataGetter with correct params', () => {
    const query = {
      seriesid: 'SOME_ID',
      matchid: 'SOME_ID'
    }

    getScorecardDetails(query).catch(e => console.error(JSON.stringify(e)))

    expect(dataGetter.default).toHaveBeenCalledTimes(1)
    expect(dataGetter.default).toHaveBeenCalledWith(SCORECARDS, SCORECARD_CACHE, query)
  })
})
