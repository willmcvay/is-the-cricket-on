import * as React from 'react'
import { Team } from '../../shared/types/queries'
import StyledTeamItem from '../../styles/blocks/team/team-item'
import StyledImage from '../../styles/base/elements/image'

const TeamItem = ({ name, logoUrl }: Team) => (
  <StyledTeamItem>
    <div>{name}</div>
    <StyledImage src={logoUrl} />
  </StyledTeamItem>
)

export default TeamItem
