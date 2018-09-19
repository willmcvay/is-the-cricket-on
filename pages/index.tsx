import * as React from 'react'
import { graphql } from 'react-apollo'
import upcomingMatches from '../shared/graphql/queries/upcomingMatches.graphql'

const Index = ({ children }) => {
  return (
    <div>
      <div>Hello World</div>
      {children}
    </div>
  )
}

export default 	graphql(upcomingMatches, {
  options: {
    // variables: {},
    props: ({ data }) => {
      return data
    }
  }
})(Index)
