import * as React from 'react'
import { graphql, ChildProps } from 'react-apollo'
import upcomingMatchStats from '../../shared/graphql/queries/upcoming-match-stats.graphql'
import { Query } from '../../shared/types/queries'
import { MATCH_LIST } from '../../shared/constants/routes'
import { StyledH1, StyledH4 } from '../../styles/base/typeography/headings'
import { pluralise } from '../../shared/utils/pluralise'
import { getHeroText } from '../../shared/utils/hero-text'
import NavItem from '../common/nav-item'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import StyledHeader from '../../styles/base/layout/header'

export const HomePage = (props: ChildProps<{}, Query>) => {
  const text = getHeroText(props)
  if (!text) return text
  const { inProgressMatchCount, upcomingMatchCount, completedMatchCount } = text

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledH1>{text.isThereCricketOn}</StyledH1>
        <StyledH4>{text.headerText}</StyledH4>
      </StyledHeader>
      <StyledNavBar>
        <NavItem
          prefetch={true}
          pathname={MATCH_LIST}
          query={{ status: 'INPROGRESS' }}
          displayText={`${inProgressMatchCount} ${pluralise(
            inProgressMatchCount,
            'match',
            'es'
          )} in progress`}
        />
        <NavItem
          prefetch={true}
          pathname={MATCH_LIST}
          query={{ status: 'UPCOMING' }}
          displayText={`${upcomingMatchCount} ${pluralise(
            upcomingMatchCount,
            'match',
            'es'
          )} upcoming`}
        />
        <NavItem
          prefetch={true}
          pathname={MATCH_LIST}
          query={{ status: 'COMPLETED' }}
          displayText={`${completedMatchCount} ${pluralise(
            completedMatchCount,
            'match',
            'es'
          )} completed`}
        />
      </StyledNavBar>
    </React.Fragment>
  )
}

export default graphql<{}, Query, {}>(upcomingMatchStats)(HomePage)
