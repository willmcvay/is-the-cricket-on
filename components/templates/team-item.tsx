import * as React from 'react'
import { Team } from '../../shared/types/queries'
import StyledImage from '../../styles/base/elements/image'
import StyledGridWrapper from '../../styles/base/layout/grid-wrapper'
import { layoutTwoHalf } from '../../styles/base/variables/layout'

const TeamItem = ({ name, logoUrl }: Team) => (
  <StyledGridWrapper theme={{ gridColumns: `${layoutTwoHalf} 1fr` }}>
    <StyledImage src={logoUrl || ''} />
    <span>{name}</span>
  </StyledGridWrapper>
)

export default TeamItem
