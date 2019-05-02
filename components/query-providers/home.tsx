import * as React from 'react'
import { graphql } from 'react-apollo'
import upcomingMatchStats from '../../shared/graphql/queries/upcoming-match-stats.graphql'
import { Query, UpcomingStats } from '../../shared/types/queries'
import { Core } from '../../shared/types/core'
import HomePage from '../templates/home'

export interface HomePageProps extends UpcomingStats {
  isThereCricketOn: string
  headerText: string
}

export const getChildProps = (props: Core.ApolloWrappedProps): HomePageProps | null => {
  if (!props.data || !props.data.upcomingMatchStats) return null
  const { upcomingMatchStats } = props.data
  const { inProgressMatchCount } = upcomingMatchStats.meta

  return {
    ...upcomingMatchStats.meta,
    isThereCricketOn: inProgressMatchCount ? 'Yes' : 'No',
    headerText: inProgressMatchCount ? '...there is cricket on' : '...there is no cricket on'
  }
}

export const HomePageProvider = (props: Core.ApolloWrappedProps) => {
  const childProps = getChildProps(props)
  if (!childProps) return childProps

  return <HomePage {...childProps} />
}

export default graphql<Core.ApolloWrappedProps, Query, {}>(upcomingMatchStats)(HomePageProvider)
