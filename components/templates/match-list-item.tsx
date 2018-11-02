import * as React from 'react'
import { Match } from '../../shared/types/queries'
import TeamItem from './team-item'
import Link from 'next/link'
import { MATCH_DETAILS } from '../../shared/constants/routes'
import { stringMapToQuery } from '../../shared/utils/data'
import StyledA from '../../styles/base/elements/anchor'
import StyledP from '../../styles/base/elements/paragraph'

const MatchListItem = ({ id, name, homeTeam, awayTeam, series, venue }: Match) => {
  const query = stringMapToQuery({
    seriesid: String(series.id),
    matchid: String(id)
  })

  return (
    <React.Fragment>
      <Link prefetch href={`${MATCH_DETAILS}${query}`}>
        <StyledA href={`${MATCH_DETAILS}${query}`}>
          <StyledP>
            {name}, {series.name}, {venue.name}
          </StyledP>
          <TeamItem {...homeTeam} />
          <TeamItem {...awayTeam} />
        </StyledA>
      </Link>
    </React.Fragment>
  )
}

export default MatchListItem
