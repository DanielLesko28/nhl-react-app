import React from "react";
import { Select } from "@chakra-ui/react";

const TeamFilters = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    onFilterChange(selectedOption);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <Select placeholder="Select position" onChange={handleFilterChange}>
        <option value="goalies">Goalies</option>
        <option value="defensemen">Defenders</option>
        <option value="attackers">Attackers</option>
      </Select>
    </div>
  );
};

export default TeamFilters;
