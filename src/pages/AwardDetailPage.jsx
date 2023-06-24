import { Box, Center } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NhlAwardsContext } from "../context/AwardContext";

const AwardDetailPage = () => {
  const { id } = useParams();
  const { awards } = useContext(NhlAwardsContext);
  console.log("single award id", id);

  const newAwards = awards?.awards;

  const totallyNewAwards = newAwards.map((award) => {
    return { ...award, id: award.link.split("/").pop() };
  });

  console.log("totally new awards", totallyNewAwards);

  const award =
    totallyNewAwards &&
    totallyNewAwards.find((singleAward) => singleAward.id === parseInt(id));

  console.log("this should be award", award);

  return (
    <Box w="100%">
      <Center>{id}</Center>
    </Box>
  );
};

export default AwardDetailPage;
