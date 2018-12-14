import { getUpcomingMatchStats } from '../upcoming-match-stats'
import * as dataGetter from '../../utils/data-getter'
import { MATCHES } from '../../../shared/constants/api-keys'
import { UPCOMING_MATCH_STATS } from '../../../shared/constants/cache-keys'

jest.mock('../../utils/data-getter')

describe('getUpcomingMatchStats', () => {
  it('should call dataGetter with correct params', () => {
    getUpcomingMatchStats().catch(e => console.error(JSON.stringify(e)))

    expect(dataGetter.default).toHaveBeenCalledTimes(1)
    expect(dataGetter.default).toHaveBeenCalledWith(MATCHES, UPCOMING_MATCH_STATS)
  })
})
