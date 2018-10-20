import * as React from 'react'
import { UtilityTypes } from '../../shared/types/utility'
import Link from 'next/link'
import { stringMapToQuery } from '../../shared/utils/data'
import StyledNavItem from '../../styles/blocks/nav/nav-item'

export interface NavItemProps {
  prefetch: boolean
  pathname: string
  query?: UtilityTypes.StringMap
  displayText: string
}

const NavItem = ({ pathname, query, prefetch, displayText }: NavItemProps) => (
  <StyledNavItem>
    <Link prefetch={prefetch} href={{ pathname, query }}>
      <a href={`${pathname}${query ? stringMapToQuery(query) : ''}`}>{displayText}</a>
    </Link>
  </StyledNavItem>
)

export default NavItem
