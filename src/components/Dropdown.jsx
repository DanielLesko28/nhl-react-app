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

  const fetchData = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNhlTeams(data.teams);
      });
  };

  console.log("how many renders", nhlTeams);
  console.log("does it work somehow?  ", nhlTeams);

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
                {nhlTeams.map((team, index) => {
                  return <MenuItem key={index}>{team.name}</MenuItem>;
                })}
                <MenuItem>
                  {nhlTeams.map((team, index) => {
                    return <div></div>;
                  })}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Center>
  );
};
export default Dropdown;
