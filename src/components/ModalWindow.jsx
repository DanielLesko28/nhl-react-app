import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { useUserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ModalWindow({ isOpen, onClose }) {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent style={{ height: "250px" }}>
          <ModalHeader>Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 style={{ paddingTop: "1.5rem" }}>
              You're logged in with email:{" "}
              <span style={{ fontWeight: "bold" }}>{user.email}</span>
            </h1>
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={!user}
              colorScheme="blue"
              mr={3}
              onClick={handleLogout}
            >
              Log out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ModalWindow;
