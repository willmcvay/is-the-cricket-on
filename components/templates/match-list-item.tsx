import * as React from 'react'
import { Match } from '../../shared/types/queries'
import TeamItem from './team-item'
import Link from 'next/link'
import { MATCH_DETAILS } from '../../shared/constants/routes'
import { stringMapToQuery } from '../../shared/utils/data'
import StyledA from '../../styles/base/elements/anchor'
import { withComma } from '../../shared/utils/text'
import StyledMatchListItem from '../../styles/blocks/match/match-list-item'
import StyledDivider from '../../styles/base/layout/divider'
import StyledP from '../../styles/base/elements/paragraph'

const MatchListItem = ({ id, name, homeTeam, awayTeam, series, venue }: Match) => {
  const query = stringMapToQuery({
    seriesid: String(series.id),
    matchid: String(id)
  })

  return (
    <StyledDivider theme={{ size: 'FULL' }}>
      <Link prefetch href={`${MATCH_DETAILS}${query}`}>
        <StyledA>
          <StyledMatchListItem>
            <TeamItem {...homeTeam} />
            <TeamItem {...awayTeam} />
          </StyledMatchListItem>
          <StyledP>
            {withComma(series.name)}
            {withComma(name)}
            {venue.name}
          </StyledP>
        </StyledA>
      </Link>
    </StyledDivider>
  )
}

export default MatchListItem
