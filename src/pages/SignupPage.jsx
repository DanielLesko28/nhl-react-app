import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Box
        borderRadius="md"
        w="20rem"
        border="1px solid black"
        m={5}
        p={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading mb={4}> NHL App </Heading>
        <form
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Input
            w="100%"
            p={5}
            my={2}
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />

          <Input
            p={5}
            my={2}
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <Button
            width="80%"
            alignSelf="center"
            my={4}
            type="submit"
            onClick={onSubmit}
            backgroundColor="blue.400"
            color="white"
            _hover={{ backgroundColor: "blue.300" }}
          >
            Sign up
          </Button>
        </form>

        <Text>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </Text>
      </Box>
    </Box>
  );
};

export default SignupPage;
