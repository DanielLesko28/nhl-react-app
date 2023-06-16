import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import ModalWindow from "./ModalWindow";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const handleProfileIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOpen = () => {
    setSideMenu(true);
  };

  const handleMenuClose = () => {
    setSideMenu(false);
  };

  return (
    <Box bg="blue.500" p="1rem">
      <Flex justifyContent="space-between">
        <Flex alignItems="center" gap="4">
          <Button
            bg="transparent"
            _hover="transparent"
            onClick={handleMenuOpen}
          >
            <AiOutlineMenu color="white" size={25} />
          </Button>
          <Link to="/">
            <Heading color="white">NHL</Heading>
          </Link>
        </Flex>
        <Button onClick={handleProfileIconClick}>
          <CgProfile size={30} color="black" />
        </Button>
      </Flex>
      {sideMenu && (
        <HamburgerMenu onClose={handleMenuClose} sideMenu={sideMenu} />
      )}
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
