import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import ModalWindow from "./ModalWindow";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box bg="blue.500" p="1rem">
      <Flex justifyContent="space-between">
        <Heading color="white">NHL</Heading>
        <Button onClick={handleProfileIconClick}>
          <CgProfile size={30} color="black" />
        </Button>
      </Flex>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        btnName="Button Name"
        text="Example Text"
        url="https://example.com"
      />
    </Box>
  );
};

export default Navbar;
