import * as React from 'react'
import { graphql } from 'react-apollo'
import { oc } from 'ts-optchain'
import upcomingMatches from '../../shared/graphql/queries/upcoming-matches.graphql'
import { Query, Match } from '../../shared/types/queries'
import MatchListComponent from '../templates/match-list'
import { Core } from '../../shared/types/core'
import { QueryParams } from '../../shared/types/api'

export interface MatchListQueryProps extends Core.ApolloWrappedProps {
  queryString: QueryParams.MatchList
}

export const filterMatchList = (props: MatchListQueryProps): Match[] => {
  const matches = oc(props).data.upcomingMatches.matchList.matches([])
  const status = oc(props).queryString.status()
  return matches.filter(
    match =>
      (status === 'INPROGRESS' && match.status.indexOf('LIVE') !== -1) || match.status === status
  )
}

export const getStatusText = (props: MatchListQueryProps): string => {
  const status = oc(props).queryString.status()
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
