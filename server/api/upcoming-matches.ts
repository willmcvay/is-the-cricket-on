import { MATCHES } from '../../shared/constants/api-constants'
import { get } from '../utils/fetcher'
import { Query } from 'shared/types/queries'

const getUpcomingMatches = async (): Promise<Query | undefined> => {
  const response = await get<Query>(MATCHES)
  return response
}

export { getUpcomingMatches }
