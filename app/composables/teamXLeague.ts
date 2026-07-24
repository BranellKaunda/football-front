export const useTeamXLeague = () => {
  const getAllTeamXLeagues = async () => {
    const records = await $fetch("/api/teams-x-leagues");
    return records;
  };

  const getNumberOfTeamsInLeague = async (leagueId: number) => {
    const data = await $fetch<any[]>(
      `/api/teams-x-leagues/?league_id=${leagueId}`,
    );
    return data.length;
  };

  const getTeamXLeague = async (recordId: number) => {
    const record = await $fetch(`/api/teams-x-leagues/${recordId}`);
    return record;
  };

  const getLeaguesByTeam = async (teamId: number) => {
    const records = await $fetch(`/api/teams-x-leagues?team_id=${teamId}`);
    return records;
  };

  const createTeamXLeague = async (recordData: object) => {
    const res = await $fetch(`/api/teams-x-leagues/create`, {
      method: "POST",
      body: recordData,
    });
    return res;
  };

  const deleteTeamXLeague = async (recordId: number) => {
    await $fetch(`/api/teams-x-leagues/${recordId}`, {
      method: "DELETE",
    });
  };

  return {
    getAllTeamXLeagues,
    getNumberOfTeamsInLeague,
    getTeamXLeague,
    getLeaguesByTeam,
    createTeamXLeague,
    deleteTeamXLeague,
  };
};
