import Match from './graphql-definitions/match'

export default `
  schema {
    query: {
      upComingMatches: [Match!]
    }
  }
`