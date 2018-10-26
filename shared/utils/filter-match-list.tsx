import { Match } from '../types/queries'
import { nullSafe } from './null-safe'
import { MatchListProps } from '../../components/queries/match-list'

export const filterMatchList = (props: MatchListProps): Match[] => {
  const matches = nullSafe([], p => p.data!.upcomingMatches!.matchList!.matches, props) as Match[]
  const status = nullSafe('', p => p.queryString.status, props)
  return matches.filter(
    match => (status === 'INPROGRESS' && match.status === 'LIVE') || match.status === status
  )
}
