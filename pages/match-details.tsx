import * as React from 'react'
import { withRouter } from 'next/router'
import MatchDetailsQuery from '../components/query-providers/match-details'
import { QueryParams } from '../shared/types/api'
import { Core } from '../shared/types/core'

export const MatchDetails = (props: Core.ApolloWrappedRouterProps<QueryParams.MatchDetails>) => {
  if (!props.router || !props.router.query) return null
  return <MatchDetailsQuery queryString={props.router.query} />
}

export default withRouter(MatchDetails)
