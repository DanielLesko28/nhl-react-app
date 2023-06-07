import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPlayerStats, fetchPlayerDetails } from "../constants/functions";
import PlayerStatsTable from "../components/PlayerStatsTable";

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

  const playerStatistics = playerStats?.stats?.[0]?.splits?.[0]?.stat;

  //   const stats = playerStats?.stats;
  //   const splits = stats?.[0]?.splits;
  //   const stat = splits?.[0]?.stat;

  console.log("playerStatistics", playerStatistics);

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
      {playerStatistics !== undefined && (
        <PlayerStatsTable data={playerStatistics} />
      )}
    </Box>
  );
};

export default PlayerDetailPage;
