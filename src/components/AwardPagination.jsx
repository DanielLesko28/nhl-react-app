import React from "react";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "solid" : "outline"}
          colorScheme={i === currentPage ? "blue" : undefined}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <Flex justify="center" my={4}>
      <ButtonGroup isAttached>
        <Button
          style={{
            backgroundColor: "#4B9CD3",
            color: "white",
            marginRight: "2rem",
            borderRadius: "lg",
          }}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          style={{
            backgroundColor: "#4B9CD3",
            color: "white",
            marginLeft: "2rem",
            borderRadius: "lg",
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Pagination;
