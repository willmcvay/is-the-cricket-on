import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatches from '../../shared/graphql/queries/upcoming-matches.graphql'
import { Query, Match } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'

type MatchListProps = ChildProps<{}, Query> & {
  queryString: QueryParams.MatchList
}

export const filterMatchList = (props: MatchListProps): Match[] | null => {
  if (
    !props.data ||
    !props.data.upcomingMatches ||
    !props.data.upcomingMatches.matchList ||
    !props.data.upcomingMatches.matchList.matches ||
    !props.queryString.status
  ) {
    return null
  }
  const { matches } = props.data.upcomingMatches.matchList

  return matches.filter(match => match.status === props.queryString.status)
}

export const MatchList = (props: MatchListProps) => {
  const matches = filterMatchList(props)
  console.log(matches)
  if (!matches) return matches
  return (
    <div>
      <div>Upcoming Matches Component for {props.queryString.status}</div>
    </div>
  )
}

export default graphql<MatchListProps, Query, {}>(upcomingMatches)(MatchList)
