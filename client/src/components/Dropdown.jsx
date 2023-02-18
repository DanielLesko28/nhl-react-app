import "../App.css";
import { useState, useEffect } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const endpoint = "https://statsapi.web.nhl.com/api/v1/teams";

const Dropdown = () => {
  const [nhlTeams, setNhlTeams] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(nhlTeams);
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
    <Center>
      <Flex justify="space-between" w="100%" p={4}>
        <Heading color="white">NHL</Heading>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                bg="blue.700"
                color="white"
                _hover={{
                  background: "blue.800",
                  color: "white",
                }}
                isActive={isOpen}
                as={Button}
                rightIcon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              >
                {isOpen ? "Close Menu" : "All Teams"}
              </MenuButton>
              <MenuList>
                {sortedTeams.map((team, index) => {
                  return <MenuItem key={index}>{team.name}</MenuItem>;
                })}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Center>
  );
};
export default Dropdown;
