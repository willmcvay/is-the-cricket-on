import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const get = async <T>(url: string) => {
  try {
    const res = await fetch(`${BASE_API_URL}${url}`, {
      headers: HEADERS
    } as RequestInit)
    const jsonVal = await res.json()
    return jsonVal as T
  } catch (error) {
    console.error('API ERROR: ', error)
  }
}

export { get }