import * as React from 'react'
import { graphql } from 'react-apollo'
import upcomingMatches from '../shared/graphql/queries/upcoming-matches.graphql'

const Index = (props) => {
  console.log('PROPS', props)
  return (
    <div>
      <div>Hello World</div>
      {props.children}
    </div>
  )
}

export default graphql(upcomingMatches)(Index)
