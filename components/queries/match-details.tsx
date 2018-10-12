import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import matchDetails from '../../shared/graphql/queries/match-details.graphql'
import { Query } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'

type MatchDetailsProps = ChildProps<{}, Query> & {
  queryString: QueryParams.MatchDetails
}

export const MatchDetails = (_props: MatchDetailsProps) => {
  return (
    <div>
      <div>Child</div>
    </div>
  )
}

export default graphql<MatchDetailsProps, Query, {}>(matchDetails, {
  options: props => ({
    variables: props.queryString
  })
})(MatchDetails)
