import * as React from 'react'
import { Match } from '../../shared/types/queries'
import StyledHeader from '../../styles/base/layout/header'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../common/nav-item'
import { HOME } from '../../shared/constants/routes'
import MatchListItem from './match-list-item'

export interface MatchListComponentProps {
  matches: Match[]
  statusText: string
}

export const MatchList = ({ statusText, matches }: MatchListComponentProps) => (
  <React.Fragment>
    <StyledHeader>
      <StyledH4>Matches {statusText}</StyledH4>
    </StyledHeader>
    {matches.map(match => (
      <MatchListItem key={match.id} {...match} />
    ))}
    <StyledNavBar>
      <NavItem prefetch={true} pathname={HOME} displayText={'Home'} />
    </StyledNavBar>
  </React.Fragment>
)

export default MatchList
