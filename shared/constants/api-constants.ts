const HEADERS = {
  'X-Mashape-Key': process.env.API_KEY,
  Accept: 'application/json'
}
const BASE_API_URL = 'https://dev132-cricket-live-scores-v1.p.mashape.com/'
const GRAPHQL_API = 'http://localhost:8000/graphql'

export { HEADERS, BASE_API_URL, GRAPHQL_API }