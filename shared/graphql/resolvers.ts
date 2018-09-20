import { getUpcomingMatches } from '../../server/api/upcoming-matches'

const resolvers = {
  Query: {
    upcomingMatches: async () => getUpcomingMatches()
  }
}

export default resolvers
