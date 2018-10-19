import { getUpcomingMatches } from '../../server/api/upcoming-matches'
import { getUpcomingMatchStats } from '../../server/api/upcoming-match-stats'
import { getMatchDetails } from '../../server/api/match-details'
import { QueryParams } from '../../shared/types/api'
import { IResolvers } from 'apollo-server-express'

const resolvers = {
  Query: {
    upcomingMatchStats: async () => getUpcomingMatchStats(),
    upcomingMatches: async () => getUpcomingMatches(),
    matchDetails: async (_obj: any, args: QueryParams.MatchDetails) => getMatchDetails(args)
  }
} as IResolvers<any, any>

export default resolvers
