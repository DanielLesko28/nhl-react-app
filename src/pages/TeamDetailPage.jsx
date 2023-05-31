import React from "react";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";

const TeamDetailPage = () => {
  const { id } = useParams();

  const fetchTeam = async () => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${id}`
    );
    const data = await response.json();
    return data.teams;
  };

  const {
    data: singleTeam,
    isLoading,
    isError,
  } = useQuery(["shit", id], fetchTeam);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching team data</div>;
  }

  console.log("query data", singleTeam);

  return (
    <div style={{ width: "100%" }}>
      <Center>
        {singleTeam &&
          singleTeam.map((team) => <h1 key={team.id}>This is {team.name}</h1>)}
      </Center>
    </div>
  );
};

export default TeamDetailPage;
