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
    <>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>
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
    </>
  );
}

export default ModalWindow;
