import * as React from 'react'
import MatchListQuery from '../components/query-providers/match-list'
import { QueryParams } from '../shared/types/api'
import { withRouter } from 'next/router'
import { Core } from '../shared/types/core'

export type MatchListProps = Core.ApolloWrappedRouterProps<QueryParams.MatchList>

const MatchList = (props: MatchListProps) => (
  <MatchListQuery queryString={props.router.query as QueryParams.MatchList} />
)

export default withRouter(MatchList)
