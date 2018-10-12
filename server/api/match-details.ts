import { DETAILS } from '../../shared/constants/api-keys'
import { MATCH_DETAILS } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'
import { QueryParams } from '../../shared/types/api'

const getMatchDetails = async (query: QueryParams.MatchDetails): Promise<Query | undefined> =>
  dataGetter(DETAILS, MATCH_DETAILS, query)

export { getMatchDetails }
