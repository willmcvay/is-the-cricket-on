import * as React from 'react'
import { CommentaryInnings, CommentaryMeta } from '../../shared/types/queries'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledHeader from '../../styles/base/layout/header'
import { nullSafe } from '../../shared/utils/null-safe'
import StyledP from '../../styles/base/elements/paragraph'

export interface CommentaryDetailsProps extends CommentaryMeta {
  innings: CommentaryInnings[]
}

const CommentaryDetails = (props: CommentaryDetailsProps) => {
  console.log('COMMETARY PROPS', props)
  const commentaryItem = nullSafe(null, p => p.innings[0].overs![0]!.balls![0]!.comments, props)

  if (!commentaryItem) return null
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH4>Commentary</StyledH4>
        {commentaryItem.map(item => {
          if (!item) return null
          return <StyledP key={item.id}>{item.text}</StyledP>
        })}
      </StyledHeader>
    </React.Fragment>
  )
}

export default CommentaryDetails
