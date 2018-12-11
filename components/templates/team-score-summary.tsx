import * as React from 'react'
import { Team, Score } from '../../shared/types/queries'
import TeamItem from './team-item'
import StyledGridWrapper from '../../styles/base/layout/grid-wrapper'

interface TeamScoreSummaryProps {
  team: Team
  scores?: Score | null
  isHome: boolean
}

const TeamScoreSummary = ({ team, scores, isHome }: TeamScoreSummaryProps) => {
  return (
    <StyledGridWrapper theme={{ gridColumns: '100%' }}>
      <TeamItem {...team} />
      <span>{scores && isHome && `${scores.homeScore} ${scores.homeOvers}`}</span>
      <span>{scores && !isHome && `${scores.awayScore} ${scores.awayOvers}`}</span>
    </StyledGridWrapper>
  )
}

export default TeamScoreSummary
