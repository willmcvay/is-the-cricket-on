import { getUpcomingMatches } from '../../server/api/upcoming-matches'
import { getMatchDetails } from '../../server/api/match-details'
import { QueryParams } from '../../shared/types/api'

const resolvers = {
  Query: {
    upcomingMatches: async () => getUpcomingMatches(),
    matchDetails: async (_obj: any, args: QueryParams.MatchDetails) => getMatchDetails(args)
  }
}

export default resolvers
