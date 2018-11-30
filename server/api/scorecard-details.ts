import { SCORECARDS } from '../../shared/constants/api-keys'
import { SCORECARD_CACHE } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'
import { QueryParams } from '../../shared/types/api'

const getScorecardDetails = async (
  query: QueryParams.ScorecardDetails
): Promise<Query | undefined> => dataGetter(SCORECARDS, SCORECARD_CACHE, query)

export { getScorecardDetails }
