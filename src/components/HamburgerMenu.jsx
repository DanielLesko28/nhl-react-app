import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
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
          {nhlTeams.length > 0 &&
            sortedTeams.map((team, index) => (
              <Link to={`/${team.id}`} key={index} onClick={onClose}>
                <Text p="2" color="black">
                  {team.name}
                </Text>
              </Link>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
