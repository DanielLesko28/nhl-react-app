import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { Alert, Box, Button, Center, Heading, Input } from "@chakra-ui/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "An error occurred.");
    }
  };

  return (
    <Box w="100%">
      <Center>
        <Box w="600px" border="1px solid black" m="5" p="6">
          <Center>
            <Heading mt="2"> NHL App Login</Heading>
          </Center>
          <Center>
            <Box my="3">{error && <Alert status="error">{error}</Alert>}</Box>
          </Center>
          <Center>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{ width: "80%" }}
            >
              <Input
                mt="4"
                my="2"
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                my="2"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Center>
                <Button
                  colorScheme="blue"
                  _hover={{ bg: "deepskyblue" }}
                  m="2"
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
              </Center>
            </form>
          </Center>

          <Center>
            <Box>
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  fontWeight: "bold",
                  color: "navy",
                  textDecoration: "underline",
                }}
              >
                Sign up
              </Link>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default LoginPage;
