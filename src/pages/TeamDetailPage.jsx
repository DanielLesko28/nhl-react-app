import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { NHLContext } from "../context/TeamsContext";
import RostersTable from "../components/RostersTable";
import PositionsFilter from "../components/PositionsFilter";

const TeamDetailPage = () => {
  const { id } = useParams();
  const { teams } = useContext(NHLContext);

  const team = teams && teams.find((team) => team.id === parseInt(id));

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

  console.log("roster", roster);

  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  const filteredRoster =
    roster &&
    roster.filter((player) => {
      if (selectedPosition === "") {
        return true;
      } else {
        return player.position.name === selectedPosition;
      }
    });

  if (!team) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <Center>Loading...</Center>;
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <Center>Loading roster...</Center>;
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <Center>Error fetching roster</Center>;
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Center style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{team.name}</h1>
        <h1>Their abbreviation is {team.abbreviation}</h1>
        <h1>They play in {team.conference.name} Conference</h1>
        <h1>They play in {team.division.name} Division</h1>
        <h1>Their first year of play was in {team.firstYearOfPlay}</h1>
        <h1>
          Their venue is located in {team.venue.city} and is called{" "}
          {team.venue.name}
        </h1>

        <PositionsFilter onSelectPosition={handlePositionSelect} />

        <RostersTable data={filteredRoster} />
      </Center>
    </div>
  );
};

export default TeamDetailPage;
