import React, { createContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const NHLContext = createContext();

export const NHLProvider = ({ children }) => {
  const { id } = useParams();
  const fetchTeams = async () => {
    const response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${id}/?expand=team.roster`
    );
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
