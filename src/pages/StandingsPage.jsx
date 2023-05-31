import React from "react";
import { useQuery } from "react-query";
import { Center } from "@chakra-ui/react";

const endpoint = "https://statsapi.web.nhl.com/api/v1/standings/byLeague";

const fetchStandings = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.records;
};

const StandingsPage = () => {
  const {
    data: standings,
    isLoading,
    isError,
  } = useQuery("standings", fetchStandings);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching standings.</div>;
  }

  console.log("These are standings", standings);

  return (
    <Center>
      {standings.map((standing, index) => (
        <p key={index}>{standing.teamRecords}</p>
      ))}
    </Center>
  );
};

export default StandingsPage;
