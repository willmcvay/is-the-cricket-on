import * as React from 'react'
import { graphql, ChildDataProps } from 'react-apollo'
import upcomingMatches from '../shared/graphql/queries/upcoming-matches.graphql'

export const HomePage = (props: ChildDataProps) => {
  console.log('PROPS', props)

  return (
    <div>
      <div>Hello World</div>
    </div>
  )
}

// second param response
export default graphql<{}, {}>(upcomingMatches)(HomePage)
