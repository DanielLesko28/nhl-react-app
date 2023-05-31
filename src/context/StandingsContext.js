import React, { createContext } from "react";
import { useQuery } from "react-query";

export const NhlStandingsContext = createContext();

export const NhlStandingsProvider = ({ children }) => {
  const fetchStandings = async () => {
    const response = await fetch(
      "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
    );
    const data = await response.json();
    return data.records;
  };

  const {
    data: standings,
    isLoading,
    isError,
  } = useQuery("standings", fetchStandings);

  return (
    <NhlStandingsContext.Provider value={{ standings, isLoading, isError }}>
      {children}
    </NhlStandingsContext.Provider>
  );
};
