import * as React from 'react'
import { graphql } from 'react-apollo'
import { oc } from 'ts-optchain'
import commentaryDetails from '../../shared/graphql/queries/commentary-details.graphql'
import { Query } from '../../shared/types/queries'
import { Core } from '../../shared/types/core'
import CommentaryDetailsComponent from '../templates/commentary-details'

export interface CommentaryDetailsProps extends Core.ApolloWrappedProps {
  matchid?: string
  seriesid?: string
}

export const CommentaryDetails = (props: CommentaryDetailsProps) => {
  const innings = oc(props).data.commentaryDetails.commentary.innings(null)
  const meta = oc(props).data.commentaryDetails.meta(null)

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
