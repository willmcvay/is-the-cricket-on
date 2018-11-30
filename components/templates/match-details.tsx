import * as React from 'react'
import { MatchDetail, MatchStats } from '../../shared/types/queries'
import { StyledH1, StyledH4, StyledH6 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../common/nav-item'
import { HOME, MATCH_LIST } from '../../shared/constants/routes'
import TeamScoreSummary from './team-score-summary'
import CommentaryDetails from '../query-providers/commentary-details'
import ScorecardDetails from '../query-providers/scorecard-details'

const MatchDetails = ({
  matchSummary,
  hasFullScorecard,
  seriesid,
  matchid,
  hasCommentary
}: MatchDetail & MatchStats & { matchid: string; seriesid: string }) => {
  const { homeTeam, awayTeam, matchSummaryText, currentMatchState, scores } = matchSummary

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH1>Match details</StyledH1>
        <StyledH4>
          {homeTeam.name} vs {awayTeam.name}
        </StyledH4>
        <StyledH6>{matchSummaryText}</StyledH6>
        <TeamScoreSummary team={homeTeam} scores={scores} isHome={true} />
        <TeamScoreSummary team={awayTeam} scores={scores} isHome={false} />
        {hasCommentary && <CommentaryDetails seriesid={seriesid} matchid={matchid} />}
        {hasFullScorecard && <ScorecardDetails seriesid={seriesid} matchid={matchid} />}
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
