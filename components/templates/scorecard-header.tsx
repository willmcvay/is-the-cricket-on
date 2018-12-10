import * as React from 'react'
import StyledGridCell from '../../styles/base/layout/grid-cell'

const ScoreCardHeader = () => (
  <React.Fragment>
    <StyledGridCell theme={{ invertColor: true }}>Name</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>How Out</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>Runs</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>Balls</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>S/R</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>4s</StyledGridCell>
    <StyledGridCell theme={{ invertColor: true }}>6s</StyledGridCell>
  </React.Fragment>
)

export default ScoreCardHeader
