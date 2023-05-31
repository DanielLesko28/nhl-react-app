import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { NHLContext } from "../context/TeamsContext";

const TeamDetailPage = () => {
  const { id } = useParams();
  const { teams } = useContext(NHLContext);

  const team = teams.find((team) => team.id === parseInt(id));

  console.log("team", team);

  if (!team) {
    return <div>Loading...</div>; // You can show a loading state if the team data is not available in the context yet
  }

  return (
    <div style={{ width: "100%" }}>
      <Center>
        <h1>This is the team {team.name}</h1>
      </Center>
    </div>
  );
};

export default TeamDetailPage;
