import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatches from '../shared/graphql/queries/upcoming-matches.graphql'
import { Query } from '../shared/types/queries'

export const HomePage = (props: ChildProps<{}, Query>) => {
  console.log('PROPS', props.data!.upcomingMatches)

  return (
    <div>
      <div>Hello World</div>
    </div>
  )
}

export default graphql<{}, Query, {}>(upcomingMatches)(HomePage)
