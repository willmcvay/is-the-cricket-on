import * as React from 'react'
import { graphql } from 'react-apollo'
import { oc } from 'ts-optchain'
import matchDetails from '../../shared/graphql/queries/match-details.graphql'
import { Query } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'
import { Core } from '../../shared/types/core'
import MatchDetailsComponent from '../templates/match-details'

export interface MatchDetailsProps extends Core.ApolloWrappedProps {
  queryString: QueryParams.MatchDetails
}

export const MatchDetails = (props: MatchDetailsProps) => {
  const matchDetail = oc(props).data.matchDetails.matchDetail()
  const meta = oc(props).data.matchDetails.meta()
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
