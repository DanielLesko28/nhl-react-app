import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlayerDetailPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setPlayer(data.people[0]);
        } else {
          throw new Error("Error fetching player details");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayerDetails();
  }, [id]);

  if (!player) {
    return <div>Loading player details...</div>;
  }

  return (
    <div>
      <h1>{player.fullName}</h1>
      <p>Position: {player.primaryPosition.name}</p>
      <p>Birthdate: {player.birthDate}</p>
      <p>Birth Country: {player.birthCountry}</p>
      {/* Add more player details here as needed */}
    </div>
  );
};

export default PlayerDetailPage;
