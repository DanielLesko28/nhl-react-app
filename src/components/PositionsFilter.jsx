import React, { useState } from "react";
import { Center, Select } from "@chakra-ui/react";

const PositionsFilter = ({ onSelectPosition }) => {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setSelectedPosition(selectedPosition);
    onSelectPosition(selectedPosition);
  };

  return (
    <Center style={{ marginTop: "1rem" }}>
      <Select
        placeholder="Select position"
        value={selectedPosition}
        onChange={handlePositionChange}
      >
        <option value="">All</option>
        <option value="Goalie">Goalies</option>
        <option value="Defenseman">Defense</option>
        <option value="Left Wing">Left Wings</option>
        <option value="Center">Center</option>
        <option value="Right Wing">Right Wings</option>
      </Select>
    </Center>
  );
};

export default PositionsFilter;
