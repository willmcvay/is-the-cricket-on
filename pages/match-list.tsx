import * as React from 'react'
import MatchListComponent from '../components/queries/match-list'
import { QueryParams } from '../shared/types/api'
import { ChildProps } from 'react-apollo'
import { Query } from '../shared/types/queries'
import { WithRouterProps, withRouter } from 'next/router'

export type MatchListProps = ChildProps<{}, Query> & WithRouterProps<QueryParams.MatchList>

const MatchList = (props: MatchListProps) => (
  <div>
    <MatchListComponent queryString={props.router.query as QueryParams.MatchList} />
  </div>
)

export default withRouter(MatchList)
