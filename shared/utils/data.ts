import { UtilityTypes } from '../../shared/types/utility'

export const stringMapToQuery = (query: UtilityTypes.StringMap) =>
  Object.keys(query)
    .reduce(
      (acc, current, index) => {
        const queryString = `${!index ? '?' : ''}${current}=${query[current]}`
        acc.push(queryString)
        return acc
      },
      [] as string[]
    )
    .join('&')
