import * as React from 'react'
import { Team } from '../../shared/types/queries'

const TeamItem = ({ name, logoUrl }: Team) => (
  <React.Fragment>
    <div>{name}</div>
    <img src={logoUrl} />
  </React.Fragment>
)

export default TeamItem
