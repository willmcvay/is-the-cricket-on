import * as React from 'react'
import { Scorecard } from '../../shared/types/queries'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'

const ScorecardDetails = (props: Scorecard) => {
  console.log('SCORECARD PROPS', props)
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH4>Scorecard</StyledH4>
      </StyledHeader>
    </React.Fragment>
  )
}

export default ScorecardDetails
