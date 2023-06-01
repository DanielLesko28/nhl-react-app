import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import TeamsTable from "../components/TeamsTable";
import { NhlStandingsContext } from "../context/StandingsContext";
import { NHLContext } from "../context/TeamsContext";

const HomePage = () => {
  const { standings, isLoading, isError } = useContext(NhlStandingsContext);
  const { teams } = useContext(NHLContext);

  console.log("standings", standings);
  console.log("teams", teams);

  if (isLoading) {
    return (
      <div style={{ width: "100%" }}>
        <Center>Loading...</Center>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching standings.</div>;
  }

  if (!Array.isArray(standings)) {
    return <div>Invalid standings data.</div>;
  }

  const [newStandings] = standings;

  if (!newStandings || !Array.isArray(newStandings.teamRecords)) {
    return <div>Invalid teamRecords data.</div>;
  }

  return (
    <Box w="100%" m={2}>
      <TeamsTable data={newStandings.teamRecords} />
    </Box>
  );
};

export default HomePage;
