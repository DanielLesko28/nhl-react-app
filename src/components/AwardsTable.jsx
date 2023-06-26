import React, { useContext, useState } from "react";
import AwardCard from "./AwardCard";
import { Box, Grid } from "@chakra-ui/react";
import { NhlAwardsContext } from "../context/AwardContext";
import Pagination from "./AwardPagination";

const AwardsTable = () => {
  const { awards } = useContext(NhlAwardsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const awardsPerPage = 4; // Number of awards to display per page

  const newAwards = awards?.awards;

  const indexOfLastAward = currentPage * awardsPerPage;
  const indexOfFirstAward = indexOfLastAward - awardsPerPage;
  const currentAwards = newAwards
    ? newAwards.slice(indexOfFirstAward, indexOfLastAward)
    : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={7} marginTop="2rem">
        {currentAwards.map((award) => (
          <Box key={award.id}>
            <AwardCard
              imgUrl={award.imageUrl}
              awardName={award.name}
              awardDescription={award.description}
              awardLink={award.id}
            />
          </Box>
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(newAwards.length / awardsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AwardsTable;
