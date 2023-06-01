import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import TeamsTable from "../components/Table";
import { NhlStandingsContext } from "../context/StandingsContext";
// import { NHLContext } from "../context/TeamsContext";

const HomePage = () => {
  const { standings, isLoading, isError } = useContext(NhlStandingsContext);
  // const { teams } = useContext(NHLContext);

  // console.log("standings", standings);

  const [newStandings] = standings;

  // console.log("newStandings", newStandings.teamRecords);

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

  return (
    <Box w="100%" m={2}>
      {standings !== undefined && (
        <TeamsTable data={newStandings.teamRecords} />
      )}
    </Box>
  );
};

export default HomePage;
