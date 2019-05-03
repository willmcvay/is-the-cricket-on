import * as React from 'react'
import { MatchDetail, MatchStats } from '../../shared/types/queries'
import { StyledH1, StyledH4 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import NavItem from '../common/nav-item'
import { HOME, MATCH_LIST } from '../../shared/constants/routes'
import TeamScoreSummary from './team-score-summary'
import CommentaryDetails from '../query-providers/commentary-details'
import ScorecardDetails from '../query-providers/scorecard-details'
import StyledDivider from '../../styles/base/layout/divider'
import StyledP from '../../styles/base/elements/paragraph'
import StyledMatchListItem from '../../styles/blocks/match/match-list-item'

const MatchDetails = ({
  matchSummary,
  hasFullScorecard,
  seriesid,
  matchid,
  hasCommentary
}: MatchDetail & MatchStats & { matchid: string; seriesid: string }) => {
  const { homeTeam, awayTeam, matchSummaryText, currentMatchState, scores } = matchSummary

  return (
    <>
      <StyledHeader>
        <StyledDivider theme={{ size: 'HALF' }}>
          <StyledH1>Match Details</StyledH1>
          <StyledH4>Summary</StyledH4>
          <StyledMatchListItem>
            <TeamScoreSummary team={homeTeam} scores={scores} isHome={true} />
            <TeamScoreSummary team={awayTeam} scores={scores} isHome={false} />
          </StyledMatchListItem>
          <StyledP>{matchSummaryText}</StyledP>
        </StyledDivider>
        {hasCommentary && <CommentaryDetails seriesid={seriesid} matchid={matchid} />}
        {hasFullScorecard && <ScorecardDetails seriesid={seriesid} matchid={matchid} />}
      </StyledHeader>
      <StyledNavBar>
        <NavItem prefetch pathname={HOME} displayText={'Home'} />
        <NavItem
          prefetch
          pathname={MATCH_LIST}
          query={{
            status: currentMatchState.indexOf('LIVE') !== -1 ? 'INPROGRESS' : currentMatchState
          }}
          displayText={`Match List`}
        />
      </StyledNavBar>
    </>
  )
}

export default MatchDetails
