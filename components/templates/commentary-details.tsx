import * as React from 'react'
import { oc } from 'ts-optchain'
import { CommentaryInnings, CommentaryMeta } from '../../shared/types/queries'
import { StyledH4 } from '../../styles/base/typeography/headings'
import StyledP from '../../styles/base/elements/paragraph'

export interface CommentaryDetailsProps extends CommentaryMeta {
  innings: CommentaryInnings[]
}

const CommentaryDetails = (props: CommentaryDetailsProps) => {
  const commentaryItem = oc(props).innings[0].overs[0].balls[0].comments()

  if (!commentaryItem) return null
  return (
    <React.Fragment>
      <StyledH4>Commentary</StyledH4>
      {commentaryItem.map(item => {
        if (!item) return null
        return <StyledP key={item.id}>{item.text}</StyledP>
      })}
    </React.Fragment>
  )
}

export default CommentaryDetails
