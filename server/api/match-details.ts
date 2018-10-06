import { DETAILS } from '../../shared/constants/api-keys'
import { MATCH_DETAILS } from '../../shared/constants/cache-keys'
import { Query } from '../../shared/types/queries'
import dataGetter from '../utils/data-getter'

const getMatchDetails = async (): Promise<Query | undefined> =>
  dataGetter(DETAILS, MATCH_DETAILS)

export { getMatchDetails }
