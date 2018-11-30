import { getUpcomingMatches } from '../../server/api/upcoming-matches'
import { getUpcomingMatchStats } from '../../server/api/upcoming-match-stats'
import { getMatchDetails } from '../../server/api/match-details'
import { QueryParams } from '../../shared/types/api'
import { IResolvers } from 'apollo-server-express'
import { getCommentaryDetails } from '../../server/api/commentary-details'
import { getScorecardDetails } from '../../server/api/scorecard-details'

const resolvers = {
  Query: {
    upcomingMatchStats: async () => getUpcomingMatchStats(),
    upcomingMatches: async () => getUpcomingMatches(),
    matchDetails: async (_obj: any, args: QueryParams.MatchDetails) => getMatchDetails(args),
    commentaryDetails: async (_obj: any, args: QueryParams.CommentaryDetails) =>
      getCommentaryDetails(args),
    scorecardDetails: async (_obj: any, args: QueryParams.ScorecardDetails) =>
      getScorecardDetails(args)
  }
} as IResolvers<any, any>

export default resolvers
