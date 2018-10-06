export default {
  meta: {
    hasFullScorecard: true,
    hasCompleted: true,
    hasCommentary: true,
    hasGraph: true,
    hasPlayerProfile: true,
    hasWagonWheel: true,
    currentBattingTeam: 4,
    series: {
      id: 1445,
      name: 'England v New Zealand',
      shieldImageUrl: 'media/Logos/Series/Series-Generic-International.ashx'
    },
    requiredRunRate: '-3.00',
    currentRunRate: '6.24',
    matchName: '3rd ODI',
    matchType: 'ODI',
    venueName: 'Ageas Bowl',
    currentInningsId: 2,
    currentDay: 1
  },
  matchDetail: {
    teamBatting: {
      score: '7/306',
      isBatting: true,
      id: 4,
      name: 'New Zealand',
      shortName: 'NZL',
      logoUrl: 'media/Logos/Teams/International/New%20Zealand.ashx'
    },
    teamBowling: {
      score: '302',
      isBatting: false,
      id: 2,
      name: 'ENG',
      shortName: 'ENG',
      logoUrl: 'media/Logos/Teams/International/England.ashx'
    },
    overs: [],
    umpires: {
      firstUmpire: {
        name: 'Robinson, R T'
      },
      secondUmpire: {
        name: 'Oxenford, B N J'
      },
      thirdUmpire: {
        name: 'Davis, S J'
      },
      referee: {
        name: 'Srinath, J'
      }
    },
    matchSummary: {
      id: 37519,
      matchTypeId: 2,
      series: {
        id: 1445,
        name: 'England v New Zealand',
        shieldImageUrl: 'media/Logos/Series/Series-Generic-International.ashx'
      },
      name: '3rd ODI',
      status: 'COMPLETED',
      venue: {
        name: 'Ageas Bowl',
        location: 'Southampton'
      },
      homeTeam: {
        isBatting: false,
        id: 2,
        name: 'England',
        shortName: 'ENG',
        logoUrl: 'media/Logos/Teams/International/England.ashx',
        teamColour: '#dc210a'
      },
      awayTeam: {
        isBatting: true,
        id: 4,
        name: 'New Zealand',
        shortName: 'NZL',
        logoUrl: 'media/Logos/Teams/International/New%20Zealand.ashx',
        teamColour: '#363636'
      },
      currentMatchState: 'COMPLETED',
      isMultiDay: false,
      matchSummaryText: 'NZL won by 3 wickets',
      scores: {
        homeScore: '302 (45.2)',
        homeOvers: '45.2',
        awayScore: '7/306 (49.0)',
        awayOvers: '49.0'
      },
      isMatchDrawn: false,
      isMatchAbandoned: false,
      winningTeamId: 4,
      startDateTime: '2015-06-14T09:30:00Z',
      endDateTime: '2015-06-14T17:15:00Z',
      localStartDate: '14 June 2015',
      localStartTime: '10:30 AM',
      isWomensMatch: false,
      cmsMatchType: 'One-Day International',
      cmsMatchAssociatedType: 'ODI',
      cmsMatchVenueStartDateTime: '',
      cmsMatchVenueEndDateTime: ''
    },
    tossMessage: 'England won the toss and elected to bat.',
    innings: [
      {
        id: 1,
        teamId: 2,
        isDeclared: false,
        name: '1st Inn England ',
        shortName: 'ENG',
        wickets: '10',
        runs: '302',
        score: '302',
        overs: '45.2'
      },
      {
        id: 2,
        teamId: 4,
        isDeclared: false,
        name: '1st Inn New Zealand ',
        shortName: 'NZL',
        wickets: '7',
        runs: '306',
        score: '7/306',
        overs: '49.0'
      }
    ],
    currentBatters: [
      {
        name: 'T.G. Southee',
        runs: '5',
        ballsFaced: '3',
        isFacing: true,
        strikeRate: '166.67',
        id: 3652
      },
      {
        name: 'B.M. Wheeler',
        runs: '3',
        ballsFaced: '6',
        isFacing: false,
        strikeRate: '50.00',
        id: 6869
      },
      {
        name: 'T.G. Southee',
        runs: '5',
        ballsFaced: '3',
        isFacing: true,
        strikeRate: '166.67',
        id: 3652
      },
      {
        name: 'B.M. Wheeler',
        runs: '3',
        ballsFaced: '6',
        isFacing: false,
        strikeRate: '50.00',
        id: 6869
      }
    ],
    bowler: {
      name: 'J.E. Root',
      wickets: '0',
      runsAgainst: '21',
      bowlerOver: '3.0',
      economy: '7.00',
      strikeRate: '0.00',
      id: 4541
    }
  },
  status: 200,
  poweredBy: 'dev132'
}
