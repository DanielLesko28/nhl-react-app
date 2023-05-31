import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import TableHead from "./TableHead";

const TeamsTable = ({ data }) => {
  return (
    <div>
      <TableContainer style={{ border: "1px solid black" }}>
        <Table variant="simple">
          <TableCaption>
            I don't know yet if I want something to write here
          </TableCaption>
          <Thead style={{ backgroundColor: "DodgerBlue" }}>
            <Tr>
              <TableHead tableHeadName="Team" tableHeadTooltip="" />
              <TableHead tableHeadName="GP" tableHeadTooltip="Games Played" />
              <TableHead tableHeadName="W" tableHeadTooltip="Wins" />
              <TableHead tableHeadName="L" tableHeadTooltip="Losses" />
              <TableHead tableHeadName="OT" tableHeadTooltip="Overtime" />
              <TableHead tableHeadName="PTS" tableHeadTooltip="Points" />
            </Tr>
          </Thead>
          <Tbody>
            {data.map((team) => {
              return (
                <Tr key={team.leagueRank}>
                  <Td>
                    {team.leagueRank}.) {team.team.name}
                  </Td>
                  <Td>{team.gamesPlayed}</Td>
                  <Td>{team.leagueRecord.wins}</Td>
                  <Td>{team.leagueRecord.losses}</Td>
                  <Td>{team.leagueRecord.ot}</Td>
                  <Td>{team.points}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeamsTable;
