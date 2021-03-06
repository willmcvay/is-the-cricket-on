import React from 'react'
import { Match } from '../../shared/types/queries'
import StyledHeader from '../../styles/base/layout/header'
import { StyledH1 } from '../../styles/base/typeography/headings'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../common/nav-item'
import { HOME } from '../../shared/constants/routes'
import MatchListItem from './match-list-item'

export interface MatchListComponentProps {
  matches: Match[]
  statusText: string
}

export const MatchList = ({ statusText, matches }: MatchListComponentProps) => (
  <>
    <StyledHeader>
      <StyledH1>Matches {statusText}</StyledH1>
    </StyledHeader>
    {matches.map(match => (
      <MatchListItem key={match.id} {...match} />
    ))}
    <StyledNavBar>
      <NavItem prefetch={true} pathname={HOME} displayText={'Home'} />
    </StyledNavBar>
  </>
)

export default MatchList
