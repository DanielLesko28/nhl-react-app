import React, { createContext } from "react";
import { useQuery } from "react-query";

export const NHLContext = createContext();

export const NHLProvider = ({ children }) => {
  const fetchTeams = async () => {
    const response = await fetch("https://statsapi.web.nhl.com/api/v1/teams");
    const data = await response.json();
    return data.teams;
  };

  const { data: teams, isLoading, isError } = useQuery("teams", fetchTeams);

  return (
    <NHLContext.Provider value={{ teams, isLoading, isError }}>
      {children}
    </NHLContext.Provider>
  );
};
