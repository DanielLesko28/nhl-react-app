import React from "react";
import { Th, Box, Tooltip } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

const TableHead = ({ tableHeadName, tableHeadTooltip }) => {
  return (
    <>
      <Th style={{ color: "white" }} width="5%">
        <Box display="flex" alignItems="center">
          {tableHeadName}{" "}
          {tableHeadTooltip !== "" && (
            <Tooltip label={tableHeadTooltip} placement="bottom">
              <BsInfoCircle style={{ marginLeft: "0.3rem" }} />
            </Tooltip>
          )}
        </Box>
      </Th>
    </>
  );
};

export default TableHead;
