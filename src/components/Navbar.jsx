import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/layout";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <Box bg="blue.500" p="1rem">
      <Flex justifyContent="space-between">
        <Heading color="white">NHL</Heading>
        <CgProfile size={30} color="white" />
      </Flex>
    </Box>
  );
};

export default Navbar;
