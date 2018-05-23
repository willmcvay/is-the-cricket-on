// @flow
import { get, AxiosResponse } from 'axios'
import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const fetch = async (url: string): AxiosResponse => {
  try {
    return get(`${BASE_API_URL}${url}`, {
      headers: HEADERS
    })
	} catch (error) {
		console.error('API ERROR: ', error)
	}
}

export { fetch }