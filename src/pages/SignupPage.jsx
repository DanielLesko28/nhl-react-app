import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import { useUserAuth } from "../context/AuthContext";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box w="100%">
      <Center>
        <Box w="600px" border="1px solid black" m="5" p="6">
          <Center>
            <Heading mt="2">Create NHL App account</Heading>
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
                  Sign up
                </Button>
              </Center>
            </form>
          </Center>

          <Center>
            <Box>
              Already have an account?{" "}
              <Link
                to="/"
                style={{
                  fontWeight: "bold",
                  color: "navy",
                  textDecoration: "underline",
                }}
              >
                Log in
              </Link>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default SignupPage;
