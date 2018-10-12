import * as React from 'react'
import Link from 'next/link'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatchStats from '../../shared/graphql/queries/upcoming-match-stats.graphql'
import { Query } from '../../shared/types/queries'
import { MATCH_LIST } from '../../shared/constants/routes'

const getTemplateText = (props: ChildProps<{}, Query>) => {
  if (!props.data || !props.data.upcomingMatchStats) return null
  const { upcomingMatchStats } = props.data
  const { inProgressMatchCount } = upcomingMatchStats.meta

  return {
    ...upcomingMatchStats.meta,
    isThereCricketOn: inProgressMatchCount
      ? 'Yes there is cricket on.'
      : 'No, there is no cricket on.'
  }
}

export const HomePage = (props: ChildProps<{}, Query>) => {
  const text = getTemplateText(props)
  if (!text) return text
  return (
    <div>
      <h1>{text.isThereCricketOn}</h1>
      <nav>
        <ul>
          <Link prefetch href={{ pathname: MATCH_LIST, query: { status: 'INPROGRESS' } }}>
            <li>In progress</li>
          </Link>
          <Link prefetch href={{ pathname: MATCH_LIST, query: { status: 'UPCOMING' } }}>
            <li>Upcoming</li>
          </Link>
          <Link prefetch href={{ pathname: MATCH_LIST, query: { status: 'COMPLETED' } }}>
            <li>Past</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default graphql<{}, Query, {}>(upcomingMatchStats)(HomePage)
