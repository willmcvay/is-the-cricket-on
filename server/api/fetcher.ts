// @flow
import axios from 'axios'
import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const fetch = async (url: string) => {
  try {
    const res = await axios.get(`${BASE_API_URL}${url}`, {
      headers: HEADERS
    })
    return res

  } catch (error) {
    console.error('API ERROR: ', error)
  }
}

export { fetch }
