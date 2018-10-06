import { getUpcomingMatches } from '../../server/api/upcoming-matches'
import { getMatchDetails } from '../../server/api/match-details'

const resolvers = {
  Query: {
    upcomingMatches: async () => getUpcomingMatches(),
    matchDetails: async (_obj: any, _args: any, _context: any, _info: any) => {
      console.log(_obj, _args)
      return getMatchDetails()
    }
  }
}

export default resolvers
