/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
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
  upcomingMatches: UpcomingMatches
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
}

export interface Series {
  id: number
  name: string
  shortName: string
  shieldImageUrl: string
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
  teamColor: string
}

export interface Score {
  homeScore: string
  homeOvers: string
  awayScore: string
  awayOvers: string
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    upcomingMatches?: UpcomingMatchesResolver<UpcomingMatches, any, Context>
  }

  export type UpcomingMatchesResolver<
    R = UpcomingMatches,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace UpcomingMatchesResolvers {
  export interface Resolvers<Context = any> {
    meta?: MetaResolver<UpcomingStats, any, Context>
    matchList?: MatchListResolver<Matches | null, any, Context>
  }

  export type MetaResolver<
    R = UpcomingStats,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MatchListResolver<
    R = Matches | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace UpcomingStatsResolvers {
  export interface Resolvers<Context = any> {
    upcomingMatchCount?: UpcomingMatchCountResolver<number, any, Context>
    inProgressMatchCount?: InProgressMatchCountResolver<number, any, Context>
    completedMatchCount?: CompletedMatchCountResolver<number, any, Context>
  }

  export type UpcomingMatchCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InProgressMatchCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CompletedMatchCountResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace MatchesResolvers {
  export interface Resolvers<Context = any> {
    matches?: MatchesResolver<Match[] | null, any, Context>
  }

  export type MatchesResolver<
    R = Match[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
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
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type MatchTypeIdResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SeriesResolver<
    R = Series,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type StatusResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VenueResolver<R = Venue, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type HomeTeamResolver<
    R = Team,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AwayTeamResolver<
    R = Team,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CurrentMatchStateResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IsMultiDayResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MatchSummaryTextResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ScoresResolver<R = Score, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type IsMatchDrawnResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IsMatchAbandonedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type WinningTeamIdResolver<
    R = number,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StartDateTimeResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EndDateTimeResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LocalStartDateResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LocalStartTimeResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IsWomensMatchResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SeriesResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string, any, Context>
    shieldImageUrl?: ShieldImageUrlResolver<string, any, Context>
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ShortNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ShieldImageUrlResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace VenueResolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string, any, Context>
    location?: LocationResolver<string, any, Context>
  }

  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type LocationResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace TeamResolvers {
  export interface Resolvers<Context = any> {
    isBatting?: IsBattingResolver<boolean, any, Context>
    id?: IdResolver<number, any, Context>
    name?: NameResolver<string, any, Context>
    shortName?: ShortNameResolver<string, any, Context>
    logoUrl?: LogoUrlResolver<string, any, Context>
    teamColor?: TeamColorResolver<string, any, Context>
  }

  export type IsBattingResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ShortNameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LogoUrlResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TeamColorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ScoreResolvers {
  export interface Resolvers<Context = any> {
    homeScore?: HomeScoreResolver<string, any, Context>
    homeOvers?: HomeOversResolver<string, any, Context>
    awayScore?: AwayScoreResolver<string, any, Context>
    awayOvers?: AwayOversResolver<string, any, Context>
  }

  export type HomeScoreResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HomeOversResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AwayScoreResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AwayOversResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
