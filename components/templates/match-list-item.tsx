import * as React from 'react'
import { Match } from '../../shared/types/queries'
import TeamItem from './team-item'
import Link from 'next/link'
import { MATCH_DETAILS } from '../../shared/constants/routes'
import { stringMapToQuery } from '../../shared/utils/data'

const MatchListItem = ({ id, name, homeTeam, awayTeam, series, venue }: Match) => {
  const query = stringMapToQuery({
    seriesid: String(series.id),
    matchid: String(id)
  })
  console.log('query', query)
  return (
    <React.Fragment>
      <Link prefetch href={`${MATCH_DETAILS}${query}`}>
        <a href={`${MATCH_DETAILS}${query}`}>
          <div>{name}</div>
          <div>{series.name}</div>
          <div>{venue.name}</div>
          <TeamItem {...homeTeam} />
          <TeamItem {...awayTeam} />
        </a>
      </Link>
    </React.Fragment>
  )
}

export default MatchListItem
