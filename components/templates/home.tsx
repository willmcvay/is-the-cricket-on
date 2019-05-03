import React from 'react'
import { MATCH_LIST } from '../../shared/constants/routes'
import { StyledH1, StyledH4 } from '../../styles/base/typeography/headings'
import { pluralise } from '../../shared/utils/text'
import NavItem from '../common/nav-item'
import StyledNavBar from '../../styles/blocks/nav/nav-bar'
import StyledHeader from '../../styles/base/layout/header'
import { HomePageProps } from '../query-providers/home'

export const HomePage = (props: HomePageProps) => {
  const {
    inProgressMatchCount,
    upcomingMatchCount,
    completedMatchCount,
    isThereCricketOn,
    headerText
  } = props

  return (
    <>
      <StyledHeader>
        <StyledH1>{isThereCricketOn}</StyledH1>
        <StyledH4>{headerText}</StyledH4>
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
    </>
  )
}

export default HomePage
