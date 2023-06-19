import React from "react";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import TableHead from "./TableHead";
import { Link } from "react-router-dom";

const RostersTable = ({ positionHeader, data }) => {
  return (
    <TableContainer marginTop={5} w="80%" p={15} margin={10}>
      {/* <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {positionHeader}:
      </h1> */}

      <Table variant="simple">
        <Thead style={{ backgroundColor: "DodgerBlue" }}>
          <Tr>
            <TableHead
              tableHeadName="Name and Jersey Number"
              tableHeadTooltip=""
            />
          </Tr>
        </Thead>
        <Tbody>
          {data.map((player) => {
            return (
              <Tr key={player.person.id}>
                <Td
                  onClick={() => {
                    console.log("player info", player.person.id);
                    console.log("player info", player.person.fullName);
                  }}
                >
                  <Link to={`/people/${player.person.id}`}>
                    {player.person.fullName}
                  </Link>
                  {"        "} #{player.jerseyNumber}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RostersTable;
