import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchPlayerDetails = async (id) => {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/people/${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching player details");
  }
  const data = await response.json();
  return data.people[0];
};

const fetchPlayerStats = async (id) => {
  const response = await fetch(
    `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
  );
  if (!response.ok) {
    throw new Error("Error fetching player stats");
  }
  const data = await response.json();
  console.log("playerStatsData", data);
  return data;
};

const PlayerDetailPage = () => {
  const { id } = useParams();

  // Player informations
  const {
    data: player,
    isLoading,
    isError,
  } = useQuery(["player", id], () => fetchPlayerDetails(id));

  // Player statistics
  const { data: playerStats } = useQuery(["playerStats", id], () =>
    fetchPlayerStats(id)
  );

  if (isLoading) {
    return <div>Loading player details...</div>;
  }

  if (isError) {
    return <div>Error fetching player details</div>;
  }

  const birthDate = new Date(player.birthDate).toLocaleDateString();

  //   const stats = playerStats?.stats;
  //   const splits = stats?.[0]?.splits;
  //   const stat = splits?.[0]?.stat;

  console.log("player", player);

  return (
    <Box
      w="100%"
      marginTop={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {player.fullName}'s Informations
      </h1>
      <p>#{player.primaryNumber}</p>
      <p>Position: {player.primaryPosition.name}</p>
      <p>He is {player.currentAge} years old</p>
      <p>His birthday is {birthDate}</p>
      <p>
        He was born in {player.birthCity} and Country is {player.birthCountry}
      </p>
      <p>His height is {player.height}</p>
      <p>His weight is {player.weight} pounds</p>
    </Box>
  );
};

export default PlayerDetailPage;
