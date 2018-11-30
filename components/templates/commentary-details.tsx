import * as React from 'react'
import { CommentaryInnings, CommentaryMeta } from '../../shared/types/queries'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'

export interface CommentaryDetailsProps extends CommentaryMeta {
  innings: CommentaryInnings[]
}

const CommentaryDetails = (props: CommentaryDetailsProps) => {
  console.log('COMMETARY PROPS', props)
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH4>Commentary</StyledH4>
      </StyledHeader>
    </React.Fragment>
  )
}

export default CommentaryDetails
