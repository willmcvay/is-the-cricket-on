import { nullSafe } from './null-safe'
import { MatchListProps } from '../../components/queries/match-list'

export const getStatusText = (props: MatchListProps): string => {
  const status = nullSafe('', p => p.queryString.status, props)
  switch (status) {
    case 'COMPLETED':
      return ' completed'
    case 'INPROGRESS':
      return ' in progress'
    case 'UPCOMING':
      return ' upcoming'
    default:
      return ''
  }
}
