import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";

const TeamDetailPage = () => {
  const { id } = useParams();
  const [singleTeam, setSingleTeam] = useState([]);

  const endpoint = `https://statsapi.web.nhl.com/api/v1/teams/${id}`;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const fetchData = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleTeam(data.teams);
      });
  };

  console.log("singleTeam", singleTeam);
  return (
    <div>
      <Center>
        {singleTeam && singleTeam.map((team) => <h1>{team.name}</h1>)}
      </Center>
    </div>
  );
};

export default TeamDetailPage;
