import React, { useContext } from "react";
import AwardCard from "./AwardCard";
import { Box, Grid } from "@chakra-ui/react";
import { NhlAwardsContext } from "../context/AwardContext";

const AwardsTable = () => {
  const { awards } = useContext(NhlAwardsContext);

  const newAwards = awards?.awards;

  // console.log("awards", newAwards);

  const totallyNewAwards = newAwards.map((award) => {
    return { ...award, id: award.link.split("/").pop() };
  });

  console.log("another try", totallyNewAwards);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={7} marginTop="2rem">
      {totallyNewAwards &&
        totallyNewAwards.map((award) => {
          return (
            <Box>
              <AwardCard
                imgUrl={award.imageUrl}
                awardName={award.name}
                awardDescription={award.description}
                awardLink={award.id}
              />
            </Box>
          );
        })}
      <AwardCard />
    </Grid>
  );
};

export default AwardsTable;
