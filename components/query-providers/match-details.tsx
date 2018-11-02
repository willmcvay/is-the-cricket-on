import * as React from 'react'
import { graphql } from 'react-apollo'
import matchDetails from '../../shared/graphql/queries/match-details.graphql'
import { Query } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'
import { Core } from '../../shared/types/core'
import MatchDetailsComponent from '../templates/match-details'

export interface MatchDetailsProps extends Core.ApolloWrappedProps {
  queryString: QueryParams.MatchDetails
}

export const MatchDetails = (props: MatchDetailsProps) => <MatchDetailsComponent {...props} />

export default graphql<MatchDetailsProps, Query, {}>(matchDetails, {
  options: props => ({
    variables: props.queryString
  }),
  skip: (props: MatchDetailsProps) => !props.queryString.matchid || !props.queryString.seriesid
})(MatchDetails)
