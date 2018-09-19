import { getUpcomingMatches } from '../../server/api/upcomingMatches'

const resolvers = {
  Query: {
    upcomingMatches: async () => {
      const response = await getUpcomingMatches()

      return response.data
    }
  }
}

export default resolvers
