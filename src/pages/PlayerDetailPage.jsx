import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPlayerStats, fetchPlayerDetails } from "../constants/functions";
import PlayerStatsTable from "../components/PlayerStatsTable";

const PlayerDetailPage = () => {
  const { id } = useParams();

  const {
    data: player,
    isLoading,
    isError,
  } = useQuery(["player", id], () => fetchPlayerDetails(id));

  const { data: playerStats } = useQuery(["playerStats", id], () =>
    fetchPlayerStats(id)
  );

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <Center>Loading player details...</Center>;
      </div>
    );
  }

  if (isError) {
    return <Center>Error fetching player details</Center>;
  }

  const birthDate = new Date(player.birthDate).toLocaleDateString();

  const playerStatistics = playerStats?.stats?.[0]?.splits?.[0]?.stat;

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
