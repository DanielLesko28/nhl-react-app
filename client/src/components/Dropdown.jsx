import "../App.css";
import { useState, useEffect } from "react";
// import { gql, useQuery } from "@apollo/client";

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
import { Link } from "react-router-dom";
import { teamsEndpoint } from "../utilities/constants/index";
// import { getTeams } from "../api/getTeams";

const Dropdown = () => {
  const [nhlTeams, setNhlTeams] = useState([]);

  // const { data } = useQuery(
  //   gql`
  //     query AllTeams($id: Int) {
  //       allTeams(id: $id) {
  //         teamName
  //         abbreviation
  //         firstYearOfPlay
  //         id
  //       }
  //     }
  //   `,
  //   {
  //     variables: {
  //       id: 4,
  //     },
  //   }
  // );

  // const teamsArray = data.allTeams;

  // console.log("here are data", teamsArray);

  useEffect(() => {
    // getTeams().then((response) => console.log("this is here", response));
    fetchData();
  }, []);

  console.log(nhlTeams);
  const fetchData = () => {
    fetch(teamsEndpoint + "teams")
      .then((response) => response.json())
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
        <Link to="/">
          <Heading color="white">NHL</Heading>
        </Link>
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
                {sortedTeams.map((team) => {
                  const { name, abbreviation, id } = team;
                  return (
                    <MenuItem key={id}>
                      <Link to={`/teams/${id}/stats`}>
                        {name} ({abbreviation})
                      </Link>
                    </MenuItem>
                  );
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
