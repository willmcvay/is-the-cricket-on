import Series from './series'
import Venue from './venue'
import Team from './team'
import Score from './score'

export default ` 
  type Match {
    id: Number!
    matchTypeId: Number!
    series: Series!
    name: String!
    status: String!
    venue: Venue!
    homeTeam: Team!
    awayTeam: Team!
    currentMatchState: String!
    isMultiDay: Boolean!
    matchSummaryText: String!
    scores: Score!
    isMatchDrawn: Boolean!
    isMatchAbandoned: Boolean!
    winningTeamId: Number!
    startDateTime: String!
    endDateTime: String!
    localStartDate: String!
    localStartTime: String!
    isWomensMatch: Boolean!
  }
`