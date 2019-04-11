import { HEADERS, BASE_API_URL } from '../../shared/constants/api-constants'

const get = async <T>(url: string, query: string | null) => {
  try {
    const res = await fetch(`${BASE_API_URL}${url}${query ? query : ''}`, {
      headers: HEADERS
    } as RequestInit)

    if (res.status < 400) {
      const jsonVal = await res.json()
      return jsonVal as T
    }
    throw new Error(`ERROR FETCHING ${JSON.stringify(res)}`)
  } catch (error) {
    console.error(`API ERROR: ${error.message}`)
  }
}

export { get }
