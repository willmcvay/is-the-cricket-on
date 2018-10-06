import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import matchDetails from '../shared/graphql/queries/match-details.graphql'
import { Query } from 'shared/types/queries'

export const MatchDetails = (_props: ChildProps<{}, Query>) => {
  return (
    <div>
      <div>Match details</div>
    </div>
  )
}

export default graphql<{}, Query, {}>(matchDetails)(MatchDetails)
