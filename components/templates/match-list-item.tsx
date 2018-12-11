import * as React from 'react'
import { Match } from '../../shared/types/queries'
import TeamItem from './team-item'
import Link from 'next/link'
import { MATCH_DETAILS } from '../../shared/constants/routes'
import { stringMapToQuery } from '../../shared/utils/data'
import StyledA from '../../styles/base/elements/anchor'
import { StyledH6 } from '../../styles/base/typeography/headings'
import { withComma } from '../../shared/utils/text'
import StyledGridWrapper from '../../styles/base/layout/grid-wrapper'
import StyledDivider from '../../styles/base/layout/divider'

const MatchListItem = ({ id, name, homeTeam, awayTeam, series, venue }: Match) => {
  const query = stringMapToQuery({
    seriesid: String(series.id),
    matchid: String(id)
  })

  return (
    <StyledDivider theme={{ size: 'FULL' }}>
      <Link prefetch href={`${MATCH_DETAILS}${query}`}>
        <StyledA href={`${MATCH_DETAILS}${query}`}>
          <StyledH6>
            {withComma(name)}
            {withComma(series.name)}
            {venue.name}
          </StyledH6>
          <StyledGridWrapper theme={{ gridColumns: '50% 50%' }}>
            <TeamItem {...homeTeam} />
            <TeamItem {...awayTeam} />
          </StyledGridWrapper>
        </StyledA>
      </Link>
    </StyledDivider>
  )
}

export default MatchListItem
