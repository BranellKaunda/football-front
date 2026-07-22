export function createEmptyMatchActions(matchId: number) {
  return {
    matchId,
    playerId: null,
    playerIdExtra: null,
    teamId: null,
    action: null,
    minute: null,
  };
}

export function createEmptyMatchForm() {
  return {
    homeTeam: { id: "", name: "" },
    awayTeam: { id: "", name: "" },
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    matchDate: null,
    status: "Scheduled",
    referee: { id: null, firstName: "", lastName: "" },
    competition: { id: null, name: "" },
  };
}
