import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  menuStyle,
  closeButtonStyle,
  headingStyle,
  listStyle,
  endpoint,
} from "../constants/constants";

const HamburgerMenu = ({ onClose, sideMenu }) => {
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
  const sortedTeams = [...nhlTeams].sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  return (
    <div style={menuStyle}>
      <AiOutlineClose onClick={onClose} size={30} style={closeButtonStyle} />
      <h2 style={headingStyle}>
        <span style={{ fontWeight: "bold" }}>NHL</span> Teams
      </h2>
      <nav>
        <ul style={listStyle}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Teams
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {nhlTeams.length > 0 &&
                sortedTeams.map((team, index) => (
                  <Link to={`/${team.id}`} key={index} onClick={onClose}>
                    <AccordionPanel p="2" color="black">
                      {team.name}
                    </AccordionPanel>
                  </Link>
                ))}
            </AccordionItem>
          </Accordion>
          <Box marginLeft="1rem" marginTop="0.5rem">
            <Link to="/awards" onClick={onClose}>
              <Text>Awards</Text>
            </Link>
          </Box>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
