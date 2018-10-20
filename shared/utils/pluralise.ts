export const pluralise = (count: number, text: string, suffix: string) =>
  count !== 1 ? `${text}${suffix}` : text
