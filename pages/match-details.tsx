import * as React from 'react'
import { ChildProps } from 'react-apollo'
import { Query } from '../shared/types/queries'
import { withRouter, WithRouterProps } from 'next/router'
import MatchDetailsComponent from '../components/queries/match-details'
import { QueryParams } from '../shared/types/api'

export type MatchDetailsProps = ChildProps<{}, Query> & WithRouterProps<QueryParams.MatchDetails>

export const MatchDetails = (props: MatchDetailsProps) => (
  <MatchDetailsComponent queryString={props.router.query as QueryParams.MatchDetails} />
)

export default withRouter(MatchDetails)
