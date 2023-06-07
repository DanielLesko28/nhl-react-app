import React from "react";
import TableHead from "./TableHead";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

const PlayerStatsTable = ({ data }) => {
  return (
    <TableContainer marginTop={5} w="80%" p={15} margin={10}>
      <Table>
        <Thead style={{ backgroundColor: "DodgerBlue" }}>
          <Tr>
            <TableHead tableHeadName="GP" tableHeadTooltip="" />
            <TableHead tableHeadName="G" tableHeadTooltip="" />
            <TableHead tableHeadName="A" tableHeadTooltip="" />
            <TableHead tableHeadName="P" tableHeadTooltip="" />
            <TableHead tableHeadName="+/-" tableHeadTooltip="" />
            <TableHead tableHeadName="TOI" tableHeadTooltip="" />
          </Tr>
        </Thead>
        <Tbody>
          {
            <Tr>
              <Td>{data.games}</Td>
              <Td>{data.goals}</Td>
              <Td>{data.assists}</Td>
              <Td>{data.points}</Td>
              <Td>{data.plusMinus}</Td>
              <Td>{data.timeOnIcePerGame}</Td>
            </Tr>
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlayerStatsTable;
