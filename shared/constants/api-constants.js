//@flow

const HEADERS = {
	'X-Mashape-Key': process.env.API_KEY,
	'Accept': 'application/json'
}
const BASE_API_URL = 'https://dev132-cricket-live-scores-v1.p.mashape.com/'
const MATCHES = 'matches.php'

export {
  HEADERS,
  BASE_API_URL,
  MATCHES
}