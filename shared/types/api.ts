import { UtilityTypes } from './utility'

export namespace QueryParams {
  export interface MatchDetails extends UtilityTypes.StringMap {
    matchid: string
    seriesid: string
  }
}
