/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>
}

export interface Query {
  upcomingMatchStats: UpcomingMatches
  upcomingMatches: UpcomingMatches
  matchDetails: MatchDetails
}

export interface UpcomingMatches {
  meta: UpcomingStats
  matchList?: Matches | null
}

export interface UpcomingStats {
  upcomingMatchCount: number
  inProgressMatchCount: number
  completedMatchCount: number
}

export interface Matches {
  matches?: Match[] | null
}

export interface Match {
  id: number
  matchTypeId: number
  series: Series
  name: string
  status: string
  venue: Venue
  homeTeam: Team
  awayTeam: Team
  currentMatchState: string
  isMultiDay: boolean
  matchSummaryText: string
  scores: Score
  isMatchDrawn: boolean
  isMatchAbandoned: boolean
  winningTeamId: number
  startDateTime: string
  endDateTime: string
  localStartDate: string
  localStartTime: string
  isWomensMatch: boolean
  tossMessage?: string | null
  innings?: (Innings | null)[] | null
  currentBatters?: (Batsmen | null)[] | null
  bowler?: Bowler | null
}

export interface Series {
  id: number
  name: string
  shortName?: string | null
  shieldImageUrl?: string | null
}

export interface Venue {
  name: string
  location: string
}

export interface Team {
  isBatting: boolean
  id: number
  name: string
  shortName: string
  logoUrl: string
  teamColor?: string | null
  score?: string | null
}

export interface Score {
  homeScore: string
  homeOvers: string
  awayScore: string
  awayOvers: string
}

export interface Innings {
  id: number
  teamId: number
  isDeclared?: boolean | null
  name: string
  shortName: string
  wickets: string
  runs: string
  score: string
  overs: string
}

export interface Batsmen {
  name: string
  runs: string
  ballsFaced: string
  isFacing: boolean
  strikeRate: string
  id: number
}

export interface Bowler {
  name: string
  wickets: string
  runsAgainst: string
  bowlerOver: string
  economy: string
  strikeRate: string
  id: number
}

export interface MatchDetails {
  meta: MatchStats
  matchDetail: MatchDetail
}

export interface MatchStats {
  hasFullScorecard: boolean
  hasCompleted: boolean
  hasCommentary: boolean
  hasGraph: boolean
  hasPlayerProfile: boolean
  hasWagonWheel: boolean
  currentBattingTeam: number
  series: Series
  requiredRunRate: string
  currentRunRate: string
  matchName: string
  matchType: string
  venueName: string
  currentInningsId: number
  currentDay: number
}

export interface MatchDetail {
  teamBatting: Team
  teamBowling: Team
  overs?: (string | null)[] | null
  umpires: Umpires
  matchSummary: Match
}

export interface Umpires {
  firstUmpire: Umpire
  secondUmpire: Umpire
  thirdUmpire: Umpire
  referee: Umpire
}

export interface Umpire {
  name: string
}
export interface MatchDetailsQueryArgs {
  matchid: string
  seriesid: string
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    upcomingMatchStats?: UpcomingMatchStatsResolver<UpcomingMatches, any, Context>
    upcomingMatches?: UpcomingMatchesResolver<UpcomingMatches, any, Context>
    matchDetails?: MatchDetailsResolver<MatchDetails, any, Context>
  }

  export type UpcomingMatchStatsResolver<
    R = UpcomingMatches,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UpcomingMatchesResolver<R = UpcomingMatches, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchDetailsResolver<R = MatchDetails, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    MatchDetailsArgs
  >
  export interface MatchDetailsArgs {
    matchid: string
    seriesid: string
  }
}

export namespace UpcomingMatchesResolvers {
  export interface Resolvers<Context = any> {
    meta?: MetaResolver<UpcomingStats, any, Context>
    matchList?: MatchListResolver<Matches | null, any, Context>
  }

  export type MetaResolver<R = UpcomingStats, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchListResolver<R = Matches | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace UpcomingStatsResolvers {
  export interface Resolvers<Context = any> {
    upcomingMatchCount?: UpcomingMatchCountResolver<number, any, Context>
    inProgressMatchCount?: InProgressMatchCountResolver<number, any, Context>
    completedMatchCount?: CompletedMatchCountResolver<number, any, Context>
  }

  export type UpcomingMatchCountResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type InProgressMatchCountResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CompletedMatchCountResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace MatchesResolvers {
  export interface Resolvers<Context = any> {
    matches?: MatchesResolver<Match[] | null, any, Context>
  }

  export type MatchesResolver<R = Match[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace MatchResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    matchTypeId?: MatchTypeIdResolver<number, any, Context>
    series?: SeriesResolver<Series, any, Context>
    name?: NameResolver<string, any, Context>
    status?: StatusResolver<string, any, Context>
    venue?: VenueResolver<Venue, any, Context>
    homeTeam?: HomeTeamResolver<Team, any, Context>
    awayTeam?: AwayTeamResolver<Team, any, Context>
    currentMatchState?: CurrentMatchStateResolver<string, any, Context>
    isMultiDay?: IsMultiDayResolver<boolean, any, Context>
    matchSummaryText?: MatchSummaryTextResolver<string, any, Context>
    scores?: ScoresResolver<Score, any, Context>
    isMatchDrawn?: IsMatchDrawnResolver<boolean, any, Context>
    isMatchAbandoned?: IsMatchAbandonedResolver<boolean, any, Context>
    winningTeamId?: WinningTeamIdResolver<number, any, Context>
    startDateTime?: StartDateTimeResolver<string, any, Context>
    endDateTime?: EndDateTimeResolver<string, any, Context>
    localStartDate?: LocalStartDateResolver<string, any, Context>
    localStartTime?: LocalStartTimeResolver<string, any, Context>
    isWomensMatch?: IsWomensMatchResolver<boolean, any, Context>
    tossMessage?: TossMessageResolver<string | null, any, Context>
    innings?: InningsResolver<(Innings | null)[] | null, any, Context>
    currentBatters?: CurrentBattersResolver<(Batsmen | null)[] | null, any, Context>
    bowler?: BowlerResolver<Bowler | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type MatchTypeIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SeriesResolver<R = Series, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type StatusResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type VenueResolver<R = Venue, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type HomeTeamResolver<R = Team, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type AwayTeamResolver<R = Team, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type CurrentMatchStateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsMultiDayResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchSummaryTextResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ScoresResolver<R = Score, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type IsMatchDrawnResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsMatchAbandonedResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WinningTeamIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type StartDateTimeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type EndDateTimeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LocalStartDateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LocalStartTimeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsWomensMatchResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type TossMessageResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type InningsResolver<
    R = (Innings | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CurrentBattersResolver<
    R = (Batsmen | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BowlerResolver<R = Bowler | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace SeriesResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string | null, any, Context>
    shieldImageUrl?: ShieldImageUrlResolver<string | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type ShortNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ShieldImageUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace VenueResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    location?: LocationResolver<string, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type LocationResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace TeamResolvers {
  export interface Resolvers<Context = any> {
    isBatting?: IsBattingResolver<boolean, any, Context>
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string, any, Context>
    logoUrl?: LogoUrlResolver<string, any, Context>
    teamColor?: TeamColorResolver<string | null, any, Context>
    score?: ScoreResolver<string | null, any, Context>
  }

  export type IsBattingResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type ShortNameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LogoUrlResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type TeamColorResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ScoreResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace ScoreResolvers {
  export interface Resolvers<Context = any> {
    homeScore?: HomeScoreResolver<string, any, Context>
    homeOvers?: HomeOversResolver<string, any, Context>
    awayScore?: AwayScoreResolver<string, any, Context>
    awayOvers?: AwayOversResolver<string, any, Context>
  }

  export type HomeScoreResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HomeOversResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type AwayScoreResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type AwayOversResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace InningsResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    teamId?: TeamIdResolver<number, any, Context>
    isDeclared?: IsDeclaredResolver<boolean | null, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string, any, Context>
    wickets?: WicketsResolver<string, any, Context>
    runs?: RunsResolver<string, any, Context>
    score?: ScoreResolver<string, any, Context>
    overs?: OversResolver<string, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type TeamIdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type IsDeclaredResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type ShortNameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WicketsResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunsResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type ScoreResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type OversResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
}

export namespace BatsmenResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    runs?: RunsResolver<string, any, Context>
    ballsFaced?: BallsFacedResolver<string, any, Context>
    isFacing?: IsFacingResolver<boolean, any, Context>
    strikeRate?: StrikeRateResolver<string, any, Context>
    id?: IdResolver<number, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type RunsResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BallsFacedResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsFacingResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type StrikeRateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
}

export namespace BowlerResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    wickets?: WicketsResolver<string, any, Context>
    runsAgainst?: RunsAgainstResolver<string, any, Context>
    bowlerOver?: BowlerOverResolver<string, any, Context>
    economy?: EconomyResolver<string, any, Context>
    strikeRate?: StrikeRateResolver<string, any, Context>
    id?: IdResolver<number, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type WicketsResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunsAgainstResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type BowlerOverResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type EconomyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type StrikeRateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
}

export namespace MatchDetailsResolvers {
  export interface Resolvers<Context = any> {
    meta?: MetaResolver<MatchStats, any, Context>
    matchDetail?: MatchDetailResolver<MatchDetail, any, Context>
  }

  export type MetaResolver<R = MatchStats, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchDetailResolver<R = MatchDetail, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace MatchStatsResolvers {
  export interface Resolvers<Context = any> {
    hasFullScorecard?: HasFullScorecardResolver<boolean, any, Context>
    hasCompleted?: HasCompletedResolver<boolean, any, Context>
    hasCommentary?: HasCommentaryResolver<boolean, any, Context>
    hasGraph?: HasGraphResolver<boolean, any, Context>
    hasPlayerProfile?: HasPlayerProfileResolver<boolean, any, Context>
    hasWagonWheel?: HasWagonWheelResolver<boolean, any, Context>
    currentBattingTeam?: CurrentBattingTeamResolver<number, any, Context>
    series?: SeriesResolver<Series, any, Context>
    requiredRunRate?: RequiredRunRateResolver<string, any, Context>
    currentRunRate?: CurrentRunRateResolver<string, any, Context>
    matchName?: MatchNameResolver<string, any, Context>
    matchType?: MatchTypeResolver<string, any, Context>
    venueName?: VenueNameResolver<string, any, Context>
    currentInningsId?: CurrentInningsIdResolver<number, any, Context>
    currentDay?: CurrentDayResolver<number, any, Context>
  }

  export type HasFullScorecardResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasCompletedResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasCommentaryResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasGraphResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasPlayerProfileResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasWagonWheelResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CurrentBattingTeamResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SeriesResolver<R = Series, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type RequiredRunRateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CurrentRunRateResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchNameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchTypeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type VenueNameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CurrentInningsIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CurrentDayResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace MatchDetailResolvers {
  export interface Resolvers<Context = any> {
    teamBatting?: TeamBattingResolver<Team, any, Context>
    teamBowling?: TeamBowlingResolver<Team, any, Context>
    overs?: OversResolver<(string | null)[] | null, any, Context>
    umpires?: UmpiresResolver<Umpires, any, Context>
    matchSummary?: MatchSummaryResolver<Match, any, Context>
  }

  export type TeamBattingResolver<R = Team, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type TeamBowlingResolver<R = Team, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OversResolver<R = (string | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type UmpiresResolver<R = Umpires, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchSummaryResolver<R = Match, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace UmpiresResolvers {
  export interface Resolvers<Context = any> {
    firstUmpire?: FirstUmpireResolver<Umpire, any, Context>
    secondUmpire?: SecondUmpireResolver<Umpire, any, Context>
    thirdUmpire?: ThirdUmpireResolver<Umpire, any, Context>
    referee?: RefereeResolver<Umpire, any, Context>
  }

  export type FirstUmpireResolver<R = Umpire, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SecondUmpireResolver<R = Umpire, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ThirdUmpireResolver<R = Umpire, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RefereeResolver<R = Umpire, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace UmpireResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
}
