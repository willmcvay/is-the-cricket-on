import { getUpcomingMatches } from '../upcoming-matches'
import * as dataGetter from '../../utils/data-getter'
import { MATCHES } from '../../../shared/constants/api-keys'
import { UPCOMING_MATCHES } from '../../../shared/constants/cache-keys'

jest.mock('../../utils/data-getter')

describe('getUpcomingMatches', () => {
  it('should call dataGetter with correct params', () => {
    getUpcomingMatches().catch(e => console.error(JSON.stringify(e)))

    expect(dataGetter.default).toHaveBeenCalledTimes(1)
    expect(dataGetter.default).toHaveBeenCalledWith(MATCHES, UPCOMING_MATCHES)
  })
})
