import { MATCHES } from '../../shared/constants/api-keys'
import { UPCOMING_MATCH_STATS } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'

const getUpcomingMatchStats = async (): Promise<Query | undefined> =>
  dataGetter(MATCHES, UPCOMING_MATCH_STATS)

export { getUpcomingMatchStats }
