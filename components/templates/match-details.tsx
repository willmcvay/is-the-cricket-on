import * as React from 'react'
import { MatchDetailsProps } from '../query-providers/match-details'

const MatchDetails = (props: MatchDetailsProps) => {
  console.log('PROPS ARE', props)
  return (
    <div>
      <div>Child</div>
    </div>
  )
}

export default MatchDetails
