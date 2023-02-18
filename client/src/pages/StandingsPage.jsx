import React, { useEffect, useState } from "react";
import { Center } from "@chakra-ui/react";

const endpoint = "https://statsapi.web.nhl.com/api/v1/standings";

const StandingsPage = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const response = data.records;
        setStandings(response);
      });
  }, []);

  // console.log("These are standings", standings);
  return (
    <Center>
      {standings.map((standing, index) => {
        return <p key={index}>{standing.team}</p>;
      })}
    </Center>
  );
};

export default StandingsPage;
