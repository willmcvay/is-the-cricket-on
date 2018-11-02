import * as React from 'react'
import { graphql } from 'react-apollo'
import upcomingMatches from '../../shared/graphql/queries/upcoming-matches.graphql'
import { Query, Match } from '../../shared/types/queries'
import MatchListComponent from '../templates/match-list'
import { Core } from '../../shared/types/core'
import { nullSafe } from '../../shared/utils/null-safe'
import { QueryParams } from '../../shared/types/api'

export interface MatchListQueryProps extends Core.ApolloWrappedProps {
  queryString: QueryParams.MatchList
}

export const filterMatchList = (props: MatchListQueryProps): Match[] => {
  const matches = nullSafe([], p => p.data!.upcomingMatches!.matchList!.matches, props) as Match[]
  const status = nullSafe('', p => p.queryString.status, props)
  return matches.filter(
    match => (status === 'INPROGRESS' && match.status === 'LIVE') || match.status === status
  )
}

export const getStatusText = (props: MatchListQueryProps): string => {
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

export const MatchList = (props: MatchListQueryProps) => {
  const matches = filterMatchList(props)
  const statusText = getStatusText(props)
  return <MatchListComponent matches={matches} statusText={statusText} />
}

export default graphql<MatchListQueryProps, Query, {}>(upcomingMatches)(MatchList)
