import { MATCHES } from '../../shared/constants/api-constants'
import { get } from './fetcher'

const getUpcomingMatches = () => get(MATCHES)

export { getUpcomingMatches }
