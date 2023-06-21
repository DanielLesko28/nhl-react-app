import { Box, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NhlAwardsContext } from "../context/AwardContext";

const AwardsPage = () => {
  const { awards } = useContext(NhlAwardsContext);

  console.log("awards", awards?.awards);

  return (
    <Box w="100%">
      <Center>
        <h1>Awards Page</h1>
      </Center>
    </Box>
  );
};

export default AwardsPage;
