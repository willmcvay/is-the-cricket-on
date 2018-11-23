import * as React from 'react'
import { Team, Score } from '../../shared/types/queries'
import TeamItem from './team-item'
import StyledTeamScoreSummary from '../../styles/blocks/team/team-score-summary'

interface TeamScoreSummaryProps {
  team: Team
  scores?: Score | null
  isHome: boolean
}

const TeamScoreSummary = ({ team, scores, isHome }: TeamScoreSummaryProps) => {
  return (
    <StyledTeamScoreSummary>
      <TeamItem {...team} />
      <span>{scores && isHome && `${scores.homeScore} ${scores.homeOvers}`}</span>
      <span>{scores && !isHome && `${scores.awayScore} ${scores.awayOvers}`}</span>
    </StyledTeamScoreSummary>
  )
}

export default TeamScoreSummary
