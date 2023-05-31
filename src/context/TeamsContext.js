import React, { createContext, useEffect, useState } from "react";

export const NHLContext = createContext();

export const NHLProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
      const data = await response.json();
      setTeams(data.teams);
    } catch (error) {
      console.error("Error fetching teams data:", error);
    }
  };

  return (
    <NHLContext.Provider value={{ teams }}>{children}</NHLContext.Provider>
  );
};
