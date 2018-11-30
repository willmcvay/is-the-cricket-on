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
  commentaryDetails: CommentaryDetails
  scorecardDetails: ScorecardDetails
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
  scores?: Score | null
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
  name?: string | null
  shortName?: string | null
  logoUrl?: string | null
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
  team?: Team | null
  isDeclared?: boolean | null
  name: string
  shortName: string
  wickets: string
  runs: string
  score: string
  overs: string
  batsmen?: (Batsmen | null)[] | null
  bowlers?: (Bowler | null)[] | null
}

export interface Batsmen {
  name: string
  runs: string
  ballsFaced?: string | null
  isFacing?: boolean | null
  strikeRate: string
  id: number
  balls?: string | null
  fours?: string | null
  sixes?: string | null
  howOut?: string | null
  fallOfWicket?: string | null
  fallOfWicketOver?: string | null
  fowOrder?: string | null
}

export interface Bowler {
  name: string
  wickets: string
  runsAgainst?: string | null
  bowlerOver?: string | null
  economy: string
  strikeRate?: string | null
  id: number
  runsConceded?: string | null
  maidens?: string | null
  overs?: string | null
  wides?: string | null
  noBalls?: string | null
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
  requiredRunRate?: string | null
  currentRunRate?: string | null
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

export interface CommentaryDetails {
  meta?: CommentaryMeta | null
  commentary?: Commentary | null
}

export interface CommentaryMeta {
  total: number
}

export interface Commentary {
  innings?: CommentaryInnings[] | null
}

export interface CommentaryInnings {
  id: number
  name: string
  overs?: (Over | null)[] | null
}

export interface Over {
  id: number
  uniqueOverId: string
  number: number
  balls?: (Ball | null)[] | null
}

export interface Ball {
  id: number
  result: string
  ballNumber: number
  comments?: (Comment | null)[] | null
}

export interface Comment {
  id: number
  ballType: string
  dateTime?: string | null
  text: string
  isFallOfWicket: boolean
  batsmanId: number
  bowlerId: number
  runs: string
  battingTeamScore: number
  offStrikeBatsmanId: number
  wickets: number
}

export interface ScorecardDetails {
  meta: ScorecardMeta
  fullScorecard?: Scorecard | null
}

export interface ScorecardMeta {
  series: Series
}

export interface Scorecard {
  innings?: ScorecardInnings[] | null
  fullScorecardAwards?: FullScoreAwards | null
  manOfTheMatchId?: number | null
  manOfTheMatchName?: string | null
  manOfMatchBattingResults?: (Batsmen | null)[] | null
  manOfMatchBowlngResults?: (Bowler | null)[] | null
  mostRunsAwardPlayerResults?: (Batsmen | null)[] | null
  mostWicketsAwardPlayerResults?: (Bowler | null)[] | null
}

export interface ScorecardInnings {
  id: number
  name: string
  team: Team
  isDeclared?: boolean | null
  overs?: (Over | null)[] | null
  batsmen?: (Batsmen | null)[] | null
  bowlers?: (Bowler | null)[] | null
  wicket?: string | null
  run?: string | null
  over?: string | null
  extra?: string | null
  bye?: string | null
  legBye?: string | null
  wide?: string | null
  noBall?: string | null
  runRate?: string | null
  requiredRunRate?: string | null
}

export interface FullScoreAwards {
  mostRunsAward?: Batsmen | null
  mostWicketsAward?: Bowler | null
}
export interface MatchDetailsQueryArgs {
  matchid: string
  seriesid: string
}
export interface CommentaryDetailsQueryArgs {
  matchid: string
  seriesid: string
}
export interface ScorecardDetailsQueryArgs {
  matchid: string
  seriesid: string
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    upcomingMatchStats?: UpcomingMatchStatsResolver<UpcomingMatches, any, Context>
    upcomingMatches?: UpcomingMatchesResolver<UpcomingMatches, any, Context>
    matchDetails?: MatchDetailsResolver<MatchDetails, any, Context>
    commentaryDetails?: CommentaryDetailsResolver<CommentaryDetails, any, Context>
    scorecardDetails?: ScorecardDetailsResolver<ScorecardDetails, any, Context>
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

  export type CommentaryDetailsResolver<
    R = CommentaryDetails,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CommentaryDetailsArgs>
  export interface CommentaryDetailsArgs {
    matchid: string
    seriesid: string
  }

  export type ScorecardDetailsResolver<
    R = ScorecardDetails,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ScorecardDetailsArgs>
  export interface ScorecardDetailsArgs {
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
    scores?: ScoresResolver<Score | null, any, Context>
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
  export type ScoresResolver<R = Score | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
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
    name?: NameResolver<string | null, any, Context>
    shortName?: ShortNameResolver<string | null, any, Context>
    logoUrl?: LogoUrlResolver<string | null, any, Context>
    teamColor?: TeamColorResolver<string | null, any, Context>
    score?: ScoreResolver<string | null, any, Context>
  }

  export type IsBattingResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ShortNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LogoUrlResolver<R = string | null, Parent = any, Context = any> = Resolver<
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
    team?: TeamResolver<Team | null, any, Context>
    isDeclared?: IsDeclaredResolver<boolean | null, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string, any, Context>
    wickets?: WicketsResolver<string, any, Context>
    runs?: RunsResolver<string, any, Context>
    score?: ScoreResolver<string, any, Context>
    overs?: OversResolver<string, any, Context>
    batsmen?: BatsmenResolver<(Batsmen | null)[] | null, any, Context>
    bowlers?: BowlersResolver<(Bowler | null)[] | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type TeamIdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type TeamResolver<R = Team | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
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
  export type BatsmenResolver<
    R = (Batsmen | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BowlersResolver<R = (Bowler | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace BatsmenResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    runs?: RunsResolver<string, any, Context>
    ballsFaced?: BallsFacedResolver<string | null, any, Context>
    isFacing?: IsFacingResolver<boolean | null, any, Context>
    strikeRate?: StrikeRateResolver<string, any, Context>
    id?: IdResolver<number, any, Context>
    balls?: BallsResolver<string | null, any, Context>
    fours?: FoursResolver<string | null, any, Context>
    sixes?: SixesResolver<string | null, any, Context>
    howOut?: HowOutResolver<string | null, any, Context>
    fallOfWicket?: FallOfWicketResolver<string | null, any, Context>
    fallOfWicketOver?: FallOfWicketOverResolver<string | null, any, Context>
    fowOrder?: FowOrderResolver<string | null, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type RunsResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BallsFacedResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsFacingResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
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
  export type BallsResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type FoursResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type SixesResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HowOutResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type FallOfWicketResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type FallOfWicketOverResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type FowOrderResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace BowlerResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    wickets?: WicketsResolver<string, any, Context>
    runsAgainst?: RunsAgainstResolver<string | null, any, Context>
    bowlerOver?: BowlerOverResolver<string | null, any, Context>
    economy?: EconomyResolver<string, any, Context>
    strikeRate?: StrikeRateResolver<string | null, any, Context>
    id?: IdResolver<number, any, Context>
    runsConceded?: RunsConcededResolver<string | null, any, Context>
    maidens?: MaidensResolver<string | null, any, Context>
    overs?: OversResolver<string | null, any, Context>
    wides?: WidesResolver<string | null, any, Context>
    noBalls?: NoBallsResolver<string | null, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type WicketsResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunsAgainstResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type BowlerOverResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type EconomyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type StrikeRateResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type RunsConcededResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MaidensResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OversResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WidesResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NoBallsResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
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
    requiredRunRate?: RequiredRunRateResolver<string | null, any, Context>
    currentRunRate?: CurrentRunRateResolver<string | null, any, Context>
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
  export type RequiredRunRateResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CurrentRunRateResolver<R = string | null, Parent = any, Context = any> = Resolver<
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

export namespace CommentaryDetailsResolvers {
  export interface Resolvers<Context = any> {
    meta?: MetaResolver<CommentaryMeta | null, any, Context>
    commentary?: CommentaryResolver<Commentary | null, any, Context>
  }

  export type MetaResolver<R = CommentaryMeta | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CommentaryResolver<R = Commentary | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace CommentaryMetaResolvers {
  export interface Resolvers<Context = any> {
    total?: TotalResolver<number, any, Context>
  }

  export type TotalResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
}

export namespace CommentaryResolvers {
  export interface Resolvers<Context = any> {
    innings?: InningsResolver<CommentaryInnings[] | null, any, Context>
  }

  export type InningsResolver<
    R = CommentaryInnings[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace CommentaryInningsResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    overs?: OversResolver<(Over | null)[] | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type OversResolver<R = (Over | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace OverResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    uniqueOverId?: UniqueOverIdResolver<string, any, Context>
    number?: NumberResolver<number, any, Context>
    balls?: BallsResolver<(Ball | null)[] | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type UniqueOverIdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NumberResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BallsResolver<R = (Ball | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace BallResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    result?: ResultResolver<string, any, Context>
    ballNumber?: BallNumberResolver<number, any, Context>
    comments?: CommentsResolver<(Comment | null)[] | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type ResultResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BallNumberResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type CommentsResolver<
    R = (Comment | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace CommentResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    ballType?: BallTypeResolver<string, any, Context>
    dateTime?: DateTimeResolver<string | null, any, Context>
    text?: TextResolver<string, any, Context>
    isFallOfWicket?: IsFallOfWicketResolver<boolean, any, Context>
    batsmanId?: BatsmanIdResolver<number, any, Context>
    bowlerId?: BowlerIdResolver<number, any, Context>
    runs?: RunsResolver<string, any, Context>
    battingTeamScore?: BattingTeamScoreResolver<number, any, Context>
    offStrikeBatsmanId?: OffStrikeBatsmanIdResolver<number, any, Context>
    wickets?: WicketsResolver<number, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BallTypeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type DateTimeResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type TextResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type IsFallOfWicketResolver<R = boolean, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type BatsmanIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type BowlerIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunsResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type BattingTeamScoreResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OffStrikeBatsmanIdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WicketsResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace ScorecardDetailsResolvers {
  export interface Resolvers<Context = any> {
    meta?: MetaResolver<ScorecardMeta, any, Context>
    fullScorecard?: FullScorecardResolver<Scorecard | null, any, Context>
  }

  export type MetaResolver<R = ScorecardMeta, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type FullScorecardResolver<R = Scorecard | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace ScorecardMetaResolvers {
  export interface Resolvers<Context = any> {
    series?: SeriesResolver<Series, any, Context>
  }

  export type SeriesResolver<R = Series, Parent = any, Context = any> = Resolver<R, Parent, Context>
}

export namespace ScorecardResolvers {
  export interface Resolvers<Context = any> {
    innings?: InningsResolver<ScorecardInnings[] | null, any, Context>
    fullScorecardAwards?: FullScorecardAwardsResolver<FullScoreAwards | null, any, Context>
    manOfTheMatchId?: ManOfTheMatchIdResolver<number | null, any, Context>
    manOfTheMatchName?: ManOfTheMatchNameResolver<string | null, any, Context>
    manOfMatchBattingResults?: ManOfMatchBattingResultsResolver<
      (Batsmen | null)[] | null,
      any,
      Context
    >
    manOfMatchBowlngResults?: ManOfMatchBowlngResultsResolver<
      (Bowler | null)[] | null,
      any,
      Context
    >
    mostRunsAwardPlayerResults?: MostRunsAwardPlayerResultsResolver<
      (Batsmen | null)[] | null,
      any,
      Context
    >
    mostWicketsAwardPlayerResults?: MostWicketsAwardPlayerResultsResolver<
      (Bowler | null)[] | null,
      any,
      Context
    >
  }

  export type InningsResolver<
    R = ScorecardInnings[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FullScorecardAwardsResolver<
    R = FullScoreAwards | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManOfTheMatchIdResolver<R = number | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ManOfTheMatchNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ManOfMatchBattingResultsResolver<
    R = (Batsmen | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ManOfMatchBowlngResultsResolver<
    R = (Bowler | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MostRunsAwardPlayerResultsResolver<
    R = (Batsmen | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MostWicketsAwardPlayerResultsResolver<
    R = (Bowler | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ScorecardInningsResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    team?: TeamResolver<Team, any, Context>
    isDeclared?: IsDeclaredResolver<boolean | null, any, Context>
    overs?: OversResolver<(Over | null)[] | null, any, Context>
    batsmen?: BatsmenResolver<(Batsmen | null)[] | null, any, Context>
    bowlers?: BowlersResolver<(Bowler | null)[] | null, any, Context>
    wicket?: WicketResolver<string | null, any, Context>
    run?: RunResolver<string | null, any, Context>
    over?: OverResolver<string | null, any, Context>
    extra?: ExtraResolver<string | null, any, Context>
    bye?: ByeResolver<string | null, any, Context>
    legBye?: LegByeResolver<string | null, any, Context>
    wide?: WideResolver<string | null, any, Context>
    noBall?: NoBallResolver<string | null, any, Context>
    runRate?: RunRateResolver<string | null, any, Context>
    requiredRunRate?: RequiredRunRateResolver<string | null, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type TeamResolver<R = Team, Parent = any, Context = any> = Resolver<R, Parent, Context>
  export type IsDeclaredResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OversResolver<R = (Over | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type BatsmenResolver<
    R = (Batsmen | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BowlersResolver<R = (Bowler | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WicketResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type OverResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ExtraResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ByeResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LegByeResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type WideResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NoBallResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RunRateResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type RequiredRunRateResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace FullScoreAwardsResolvers {
  export interface Resolvers<Context = any> {
    mostRunsAward?: MostRunsAwardResolver<Batsmen | null, any, Context>
    mostWicketsAward?: MostWicketsAwardResolver<Bowler | null, any, Context>
  }

  export type MostRunsAwardResolver<R = Batsmen | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MostWicketsAwardResolver<R = Bowler | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
}
