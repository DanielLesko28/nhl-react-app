import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
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
              <TableHead tableHeadName="Team" />
              <Th style={{ color: "white" }} width="5%">
                <Box display="flex" alignItems="center">
                  GP{" "}
                  <Tooltip label="Games Played" placement="bottom">
                    <BsInfoCircle style={{ marginLeft: "0.2rem" }} />
                  </Tooltip>
                </Box>
              </Th>
              <Th style={{ color: "white" }} width="5%" placement="bottom">
                <Box display="flex" alignItems="center">
                  W{" "}
                  <Tooltip label="Wins" placement="bottom">
                    <BsInfoCircle style={{ marginLeft: "0.2rem" }} />
                  </Tooltip>
                </Box>
              </Th>
              <Th style={{ color: "white" }} width="5%">
                <Box display="flex" alignItems="center">
                  L{" "}
                  <Tooltip label="Losses" placement="bottom">
                    <BsInfoCircle style={{ marginLeft: "0.2rem" }} />
                  </Tooltip>
                </Box>
              </Th>
              <Th style={{ color: "white" }} width="5%">
                <Box display="flex" alignItems="center">
                  OT{" "}
                  <Tooltip label="Overtime" placement="bottom">
                    <BsInfoCircle style={{ marginLeft: "0.2rem" }} />
                  </Tooltip>
                </Box>
              </Th>
              <Th style={{ color: "white" }} width="5%">
                <Box display="flex" alignItems="center">
                  PTS{" "}
                  <Tooltip label="Points" placement="bottom">
                    <BsInfoCircle style={{ marginLeft: "0.2rem" }} />
                  </Tooltip>
                </Box>
              </Th>
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
