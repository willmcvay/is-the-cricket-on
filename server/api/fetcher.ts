import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const get = async (url: string) => {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
      headers: HEADERS
    })
    const jsonVal = await res.json()
    return jsonVal
  } catch (error) {
    console.error('API ERROR: ', error)
  }
}

export { get }
