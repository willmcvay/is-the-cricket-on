import * as React from 'react'
import { Team } from '../../shared/types/queries'
import StyledImage from '../../styles/base/elements/image'
import StyledGridWrapper from '../../styles/base/layout/grid-wrapper'
import { layoutQuadruple } from '../../styles/base/variables/layout'

const TeamItem = ({ name, logoUrl }: Team) => (
  <StyledGridWrapper theme={{ gridColumns: `${layoutQuadruple} 1fr` }}>
    <StyledImage src={logoUrl || ''} />
    <span>{name}</span>
  </StyledGridWrapper>
)

export default TeamItem
