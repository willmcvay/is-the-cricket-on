export const unixNow = (): number => (Date.now() / 1000) | 0

export const unixDiffNow = (unix: number): number => unixNow() - unix

export const cacheTimeExpired = (
  cacheAge: number,
  cacheMaxAge: number
): boolean => cacheAge > cacheMaxAge
