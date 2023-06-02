import React from "react";
import { useParams } from "react-router-dom";
import { useNHL } from "./NhlContext";

const PlayerDetailContext = () => {
  const { id } = useParams();
  const { useFetchNHLData } = useNHL();

  const { data, isLoading, isError } = useFetchNHLData(
    `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  console.log("player data", data);

  return (
    <div>
      <h1>Player Stats</h1>
      {/* Render the player stats */}
    </div>
  );
};

export default PlayerDetailContext;
