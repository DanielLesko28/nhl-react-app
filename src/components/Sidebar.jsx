import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <Box
      position="absolute"
      top="23"
      left={isOpen ? "50" : "0"}
      w={isOpen ? "250px" : "100px"}
      bg="blue.400"
      transition="left 0.3s, width 0.3s"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex direction="column">
        {isOpen &&
          sortedTeams.map((team, index) => (
            <Link to={`/${team.id}`} key={index}>
              <Text p="2" color="white">
                {team.name}
              </Text>
            </Link>
          ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
