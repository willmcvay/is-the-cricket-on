import * as React from 'react'
import { graphql } from 'react-apollo'
import matchDetails from '../../shared/graphql/queries/match-details.graphql'
import { Query } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'
import { Core } from '../../shared/types/core'
import MatchDetailsComponent from '../templates/match-details'
import { nullSafe } from '../../shared/utils/null-safe'

export interface MatchDetailsProps extends Core.ApolloWrappedProps {
  queryString: QueryParams.MatchDetails
}

export const MatchDetails = (props: MatchDetailsProps) => {
  const matchDetail = nullSafe(null, p => p.data!.matchDetails!.matchDetail, props)
  const meta = nullSafe(null, p => p.data!.matchDetails!.meta, props)
  const { matchid, seriesid } = props.queryString

  if (!matchDetail || !meta) return null

  return <MatchDetailsComponent {...{ ...matchDetail, ...meta, matchid, seriesid }} />
}

export default graphql<MatchDetailsProps, Query, {}>(matchDetails, {
  options: props => ({
    variables: props.queryString
  }),
  skip: (props: MatchDetailsProps) => !props.queryString.matchid || !props.queryString.seriesid
})(MatchDetails)
