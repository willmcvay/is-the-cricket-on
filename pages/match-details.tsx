import * as React from 'react'
import { withRouter } from 'next/router'
import MatchDetailsQuery from '../components/query-providers/match-details'
import { QueryParams } from '../shared/types/api'
import { Core } from '../shared/types/core'

export const MatchDetails = (props: Core.ApolloWrappedRouterProps<QueryParams.MatchDetails>) => (
  <MatchDetailsQuery queryString={props.router.query as QueryParams.MatchDetails} />
)

export default withRouter(MatchDetails)
