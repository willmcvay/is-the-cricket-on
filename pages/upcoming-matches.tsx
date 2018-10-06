import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatches from '../shared/graphql/queries/upcoming-matches.graphql'
import { Query } from 'shared/types/queries'

export const UpcomingMatches = (_props: ChildProps<{}, Query>) => {
  return (
    <div>
      <div>Upcoming Matches</div>
    </div>
  )
}

export default graphql<{}, Query, {}>(upcomingMatches)(UpcomingMatches)
