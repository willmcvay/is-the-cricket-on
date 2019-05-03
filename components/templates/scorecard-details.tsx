import * as React from 'react'
import { Scorecard } from '../../shared/types/queries'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'
import StyledGridCell from '../../styles/base/layout/grid-cell'
import StyledGridWrapper from '../../styles/base/layout/grid-wrapper'
import ScoreCardHeader from './scorecard-header'

const ScorecardDetails = (props: Scorecard) => {
  if (!props.innings) return null
  return (
    <StyledHeader>
      <StyledH4>Scorecard</StyledH4>
      {props.innings.map(innings => (
        <StyledGridWrapper key={innings.id} theme={{ gridColumns: '25% 30% 10% 10% 15% 5% 5%' }}>
          <ScoreCardHeader />
          {innings.batsmen &&
            innings.batsmen.map(batsman => {
              if (!batsman) return null
              return (
                <React.Fragment key={batsman.id}>
                  <StyledGridCell>{batsman.name}</StyledGridCell>
                  <StyledGridCell>{batsman.howOut}</StyledGridCell>
                  <StyledGridCell>{batsman.runs}</StyledGridCell>
                  <StyledGridCell>{batsman.balls}</StyledGridCell>
                  <StyledGridCell>{batsman.strikeRate}</StyledGridCell>
                  <StyledGridCell>{batsman.fours}</StyledGridCell>
                  <StyledGridCell>{batsman.sixes}</StyledGridCell>
                </React.Fragment>
              )
            })}
        </StyledGridWrapper>
      ))}
    </StyledHeader>
  )
}

export default ScorecardDetails
