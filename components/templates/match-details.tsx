import * as React from 'react'
import { MatchDetail, MatchStats } from '../../shared/types/queries'
import { StyledH1, StyledH4, StyledH6 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../common/nav-item'
import { HOME, MATCH_LIST } from '../../shared/constants/routes'

const MatchDetails = ({ matchSummary }: MatchDetail & MatchStats) => {
  const { homeTeam, awayTeam, matchSummaryText, currentMatchState } = matchSummary
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH1>Match details</StyledH1>
        <StyledH4>
          {homeTeam.name} vs {awayTeam.name}
        </StyledH4>
        <StyledH6>{matchSummaryText}</StyledH6>
      </StyledHeader>
      <StyledNavBar>
        <NavItem prefetch pathname={HOME} displayText={'Home'} />
        <NavItem
          prefetch
          pathname={MATCH_LIST}
          query={{ status: currentMatchState === 'LIVE' ? 'INPROGRESS' : currentMatchState }}
          displayText={`Match List`}
        />
      </StyledNavBar>
    </React.Fragment>
  )
}

export default MatchDetails
