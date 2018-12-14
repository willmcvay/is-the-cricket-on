import { getCommentaryDetails } from '../commentary-details'
import * as dataGetter from '../../utils/data-getter'
import { COMMENTARY } from '../../../shared/constants/api-keys'
import { COMMENTARY_CACHE } from '../../../shared/constants/cache-keys'

jest.mock('../../utils/data-getter')

describe('getCommentaryDetails', () => {
  it('should call dataGetter with correct params', () => {
    const query = {
      seriesid: 'SOME_ID',
      matchid: 'SOME_ID'
    }

    getCommentaryDetails(query).catch(e => console.error(JSON.stringify(e)))

    expect(dataGetter.default).toHaveBeenCalledTimes(1)
    expect(dataGetter.default).toHaveBeenCalledWith(COMMENTARY, COMMENTARY_CACHE, query)
  })
})
