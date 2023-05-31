import React from "react";
import { useQuery } from "react-query";
import { Box, Center } from "@chakra-ui/react";
import TeamsTable from "../components/Table";

const endpoint = "https://statsapi.web.nhl.com/api/v1/standings/byLeague";

const fetchStandings = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.records;
};

const HomePage = () => {
  const {
    data: standings,
    isLoading,
    isError,
  } = useQuery("standings", fetchStandings);

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

  const teamRecords = standings.map((team) => team.teamRecords);

  // console.log("teamRecords", teamRecords[0]);

  return (
    <Box w="100%" m={2}>
      <TeamsTable data={teamRecords[0]} />
    </Box>
  );
};

export default HomePage;
