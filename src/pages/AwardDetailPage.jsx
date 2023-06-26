import { Box, Center, Text, Image, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NhlAwardsContext } from "../context/AwardContext";
import { useQuery } from "react-query";
import AwardDetailTab from "../components/AwardDetailTab";

const AwardDetailPage = () => {
  const { id } = useParams();
  const { awards } = useContext(NhlAwardsContext);
  console.log("single award id", id);

  const newAwards = awards?.awards;

  const totallyNewAwards = newAwards.map((award) => {
    return { ...award, id: award.link.split("/").pop() };
  });

  console.log("totally new awards", totallyNewAwards);

  const fetchAward = async () => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/awards/${id}`
    );
    const data = await response.json();
    return data;
  };

  const {
    data: award,
    isLoading,
    isError,
  } = useQuery(["award", id], fetchAward);

  console.log("data about award", award);

  const awardToDisplay = award?.awards;

  console.log("awardToDisplay", awardToDisplay);

  return (
    <Box w="100%">
      <Center>
        {awardToDisplay &&
          awardToDisplay.map((award) => (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Heading size="lg" marginBottom="1rem" marginTop="2rem">
                {award.name}
              </Heading>
              <Image
                src={award.imageUrl}
                h="300px"
                w="200px"
                marginBottom="2rem"
              />
              <Text padding="1.5rem" alignSelf="flex-start">
                This trophy goes to{" "}
                <span style={{ fontWeight: "bold" }}>
                  {award.recipientType}
                </span>
              </Text>
              <AwardDetailTab
                historyText={award.history}
                cupText={award.description}
              />
            </Box>
          ))}
      </Center>
    </Box>
  );
};

export default AwardDetailPage;
