import { ChildProps } from 'react-apollo'
import { Query } from '../types/queries'

export const getHeroText = (props: ChildProps<{}, Query>) => {
  if (!props.data || !props.data.upcomingMatchStats) return null
  const { upcomingMatchStats } = props.data
  const { inProgressMatchCount } = upcomingMatchStats.meta

  return {
    ...upcomingMatchStats.meta,
    isThereCricketOn: inProgressMatchCount ? 'Yes' : 'No',
    headerText: inProgressMatchCount ? ' there is cricket on.' : ' there is no cricket on.'
  }
}
