import { Box, Center, Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";

const endpoint = "https://statsapi.web.nhl.com/api/v1/teams/";

const TeamsStats = () => {
  const [data, setData] = useState([]);
  //   const [nhlTeams, setNhlTeams] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const response = data.teams;
        setData(response);
        // const newData = response.id;
        // setNhlTeams(newData);
      });
  };

  // console.log("trying to get rosters", data);
  //   console.log("type of incoming data", typeof data);
  //   console.log("BBBBBBBBBBBBBBBBB");
  //   console.log("type of nhl teams", typeof nhlTeams);
  //   console.log("NHL teams", nhlTeams);

  //   console.log("now is it right ?", nhlTeams);
  const dataId = data.id;

  // console.log("What is in here ?", dataId);

  return (
    <Center>
      <Flex flexDirection="column" alignItems="center">
        <Heading>Here is ID of every Team</Heading>
        {data.map((team, index) => {
          return (
            <Box key={team.id}>
              <p>{team.id}</p>
            </Box>
          );
        })}
      </Flex>
    </Center>
  );
};

export default TeamsStats;
