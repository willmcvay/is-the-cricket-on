import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatches from '../../shared/graphql/queries/upcoming-matches.graphql'
import { Query } from '../../shared/types/queries'
import { QueryParams } from '../../shared/types/api'
import StyledHeader from '../../styles/base/layout/header'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../../components/common/nav-item'
import { HOME } from '../../shared/constants/routes'
import { getStatusText } from '../../shared/utils/get-status-text'
import { filterMatchList } from '../../shared/utils/filter-match-list'
import MatchListItem from '../templates/match-list-item'

export type MatchListProps = ChildProps<{}, Query> & {
  queryString: QueryParams.MatchList
}

export const MatchList = (props: MatchListProps) => {
  const matches = filterMatchList(props)
  console.log(matches)
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH4>Matches {getStatusText(props)}</StyledH4>
      </StyledHeader>
      {matches.map(match => (
        <MatchListItem key={match.id} {...match} />
      ))}
      <StyledNavBar>
        <NavItem prefetch={true} pathname={HOME} displayText={'Home'} />
      </StyledNavBar>
    </React.Fragment>
  )
}

export default graphql<MatchListProps, Query, {}>(upcomingMatches)(MatchList)
