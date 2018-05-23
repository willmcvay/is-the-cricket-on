// @flow
import { getUpcomingMatches } from '../../server/api/upcomingMatches'

const resolvers = {
	Query: {
		upcomingMatches: () => {
      return getUpcomingMatches()
    }
	}
}

export default resolvers