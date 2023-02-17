import Dropdown from "./Dropdown";
import React from "react";
import { Box } from "@chakra-ui/layout";

const Navbar = () => {
  return (
    <Box bg="blue.500">
      <Dropdown />
    </Box>
  );
};

export default Navbar;
