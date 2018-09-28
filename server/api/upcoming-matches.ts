import { MATCHES } from '../../shared/constants/api-keys'
import { UPCOMING_MATCHES } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'

const getUpcomingMatches = async (): Promise<Query | undefined> =>
  dataGetter(MATCHES, UPCOMING_MATCHES)

export { getUpcomingMatches }
