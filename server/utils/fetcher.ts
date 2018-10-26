import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const get = async <T>(url: string, query: string | null) => {
  try {
    const res = await fetch(`${BASE_API_URL}${url}${query ? query : ''}`, {
      headers: HEADERS
    } as RequestInit)
    console.log('RES SATUS', res.status)
    const jsonVal = await res.json()
    return jsonVal as T
  } catch (error) {
    console.error('API ERROR: ', error)
  }
}

export { get }
