export const fetchPlayerStats = async (id) => {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
  );
  if (!response.ok) {
    throw new Error("Error fetching player stats");
  }
  const data = await response.json();
  return data;
};

export const fetchPlayerDetails = async (id) => {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/people/${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching player details");
  }
  const data = await response.json();
  return data.people[0];
};
