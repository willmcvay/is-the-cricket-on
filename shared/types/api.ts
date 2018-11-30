import { UtilityTypes } from './utility'

export namespace QueryParams {
  export interface MatchDetails extends UtilityTypes.StringMap {
    matchid: string
    seriesid: string
  }

  export interface CommentaryDetails extends UtilityTypes.StringMap {
    matchid: string
    seriesid: string
  }

  export interface ScorecardDetails extends UtilityTypes.StringMap {
    matchid: string
    seriesid: string
  }

  export interface MatchList {
    status: 'UPCOMING' | 'COMPLETED' | 'INPROGRESS' | 'LIVE'
  }
}
