export const pluralise = (count: number, text: string, suffix: string) =>
  count !== 1 ? `${text}${suffix}` : text

export const withComma = (text?: string | number) => (text ? `${text}, ` : '')
