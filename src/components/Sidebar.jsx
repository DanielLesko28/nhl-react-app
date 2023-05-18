import React, { useState, useEffect } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const endpoint = "https://statsapi.web.nhl.com/api/v1/teams";

const Sidebar = () => {
  const [nhlTeams, setNhlTeams] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNhlTeams(data.teams);
      });
  };
  const sortedTeams = [...nhlTeams].sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  const sortedTeamNames = [...nhlTeams].sort((a, b) => {
    return a.abbreviation > b.abbreviation ? 1 : -1;
  });

  return (
    <Box
      w={isOpen ? "250px" : "150px"}
      bg="blue.400"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex direction="column">
        {isOpen
          ? sortedTeams.map((team, index) => {
              return (
                <Text p="2" color="white" key={index}>
                  {team.name}
                </Text>
              );
            })
          : sortedTeamNames.map((team, index) => {
              return (
                <Text color="white" p="2" key={index}>
                  {team.abbreviation}
                </Text>
              );
            })}
      </Flex>
    </Box>
  );
};

export default Sidebar;
