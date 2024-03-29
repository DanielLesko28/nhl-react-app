import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import TeamsTable from "../components/TeamsTable";
import { NhlStandingsContext } from "../context/StandingsContext";

const HomePage = () => {
  const { standings, isLoading, isError } = useContext(NhlStandingsContext);
  // const { teams } = useContext(NHLContext);

  if (isLoading) {
    return (
      <div style={{ width: "100%" }}>
        <Center>Loading...</Center>
      </div>
    );
  }

  if (isError) {
    return <Center>Error occurred while fetching standings.</Center>;
  }

  if (!Array.isArray(standings)) {
    return <Center>Invalid standings data.</Center>;
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
