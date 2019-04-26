import * as React from 'react'
import { graphql } from 'react-apollo'
import { oc } from 'ts-optchain'
import scorecardDetails from '../../shared/graphql/queries/scorecard-details.graphql'
import { Query } from '../../shared/types/queries'
import { Core } from '../../shared/types/core'
import ScorecardDetailsComponent from '../templates/scorecard-details'

export interface ScorecardDetailsProps extends Core.ApolloWrappedProps {
  matchid?: string
  seriesid?: string
}

export const ScorecardDetails = (props: ScorecardDetailsProps) => {
  const fullScorecard = oc(props).data.scorecardDetails.fullScorecard()

  if (!fullScorecard) return null

  return <ScorecardDetailsComponent {...fullScorecard} />
}

export default graphql<ScorecardDetailsProps, Query, {}>(scorecardDetails, {
  options: props => ({
    variables: {
      matchid: props.matchid,
      seriesid: props.seriesid
    }
  }),
  skip: (props: ScorecardDetailsProps) => !props.matchid || !props.seriesid
})(ScorecardDetails)
