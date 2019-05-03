import React from 'react'
import { Team } from '../../shared/types/queries'
import StyledImage from '../../styles/base/elements/image'
import StyledTeamItem from '../../styles/blocks/team/team-item'

const TeamItem = ({ name, logoUrl }: Team) => (
  <StyledTeamItem>
    <StyledImage src={logoUrl || ''} />
    <span>{name}</span>
  </StyledTeamItem>
)

export default TeamItem
