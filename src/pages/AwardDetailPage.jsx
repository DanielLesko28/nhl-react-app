import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const AwardDetailPage = () => {
  const { name } = useParams();
  return (
    <Box w="100%">
      <Center>{name}</Center>
    </Box>
  );
};

export default AwardDetailPage;
