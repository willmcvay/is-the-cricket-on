// @flow
import { MATCHES } from '../../shared/constants/api-constants'
import { fetch } from './fetcher'

const getUpcomingMatches = () => fetch(MATCHES)

export { getUpcomingMatches }
