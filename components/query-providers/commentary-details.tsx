import * as React from 'react'
import { graphql } from 'react-apollo'
import commentaryDetails from '../../shared/graphql/queries/commentary-details.graphql'
import { Query } from '../../shared/types/queries'
import { Core } from '../../shared/types/core'
import CommentaryDetailsComponent from '../templates/commentary-details'
import { nullSafe } from '../../shared/utils/null-safe'

export interface CommentaryDetailsProps extends Core.ApolloWrappedProps {
  matchid?: string
  seriesid?: string
}

export const CommentaryDetails = (props: CommentaryDetailsProps) => {
  const innings = nullSafe(null, p => p.data!.commentaryDetails!.commentary!.innings!, props)
  const meta = nullSafe(null, p => p.data!.commentaryDetails!.meta, props)

  if (!innings || !innings.length || !meta) return null

  return <CommentaryDetailsComponent innings={innings} {...meta} />
}

export default graphql<CommentaryDetailsProps, Query, {}>(commentaryDetails, {
  options: props => ({
    variables: {
      matchid: props.matchid,
      seriesid: props.seriesid
    }
  }),
  skip: (props: CommentaryDetailsProps) => !props.matchid || !props.seriesid
})(CommentaryDetails)
