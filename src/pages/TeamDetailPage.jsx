import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { NHLContext } from "../context/TeamsContext";

const TeamDetailPage = () => {
  const { id } = useParams();
  const { teams } = useContext(NHLContext);

  const team = teams.find((team) => team.id === parseInt(id));

  const fetchRoster = async () => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`
    );
    const data = await response.json();
    return data.roster;
  };

  const {
    data: roster,
    isLoading,
    isError,
  } = useQuery(["roster", id], fetchRoster);

  console.log("team", team);
  console.log("roster", roster);

  if (!team) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading roster...</div>;
  }

  if (isError) {
    return <div>Error fetching roster</div>;
  }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Center style={{ display: "flex", flexDirection: "column" }}>
        <h1>This is team {team.name}</h1>
        <h1>Their abbreviation is: {team.abbreviation}</h1>
        <h1>They play in {team.conference.name} Conference</h1>
        <h1>They play in {team.division.name} Division</h1>
        <h1>Their first year of play was in {team.firstYearOfPlay}</h1>
        <h1>
          Their venue is located in {team.venue.city} and is called{" "}
          {team.venue.name}
        </h1>
        <h1>Roster:</h1>
        {roster.map((player) => (
          <p key={player.person.id}>{player.person.fullName}</p>
        ))}
      </Center>
    </div>
  );
};

export default TeamDetailPage;
