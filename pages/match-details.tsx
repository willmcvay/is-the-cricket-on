import * as React from 'react'
import { Query as ApolloQuery, ChildProps } from 'react-apollo'
import matchDetails from '../shared/graphql/queries/match-details.graphql'
import { Query } from 'shared/types/queries'
import { withRouter, WithRouterProps } from 'next/router'

export type RouterQuery = {
  matchid: string
  seriesid: string
}

export type MatchDetailsProps = ChildProps<{}, Query> & WithRouterProps<RouterQuery>

export const MatchDetails = (props: MatchDetailsProps) => {
  return (
    <ApolloQuery
      query={matchDetails}
      variables={{
        matchid: props.router.query ? props.router.query.matchid : '',
        seriesid: props.router.query ? props.router.query.seriesid : ''
      }}
    >
      {_props => (
        <div>
          <div>Match details</div>
        </div>
      )}
    </ApolloQuery>
  )
}

export default withRouter(MatchDetails)
