import { Box, Center } from "@chakra-ui/react";
import React from "react";
import AwardsTable from "../components/AwardsTable";

const AwardsPage = () => {
  return (
    <Box w="100%">
      <Center>
        <AwardsTable />
      </Center>
    </Box>
  );
};

export default AwardsPage;
