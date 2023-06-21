import React, { createContext } from "react";
import { useQuery } from "react-query";

export const NhlAwardsContext = createContext();

export const NhlAwardsProvider = ({ children }) => {
  const fetchAwards = async () => {
    const response = await fetch("https://statsapi.web.nhl.com/api/v1/awards");
    const data = response.json();
    return data;
  };

  const { data: awards, isLoading, isError } = useQuery("awards", fetchAwards);

  return (
    <NhlAwardsContext.Provider value={{ awards, isLoading, isError }}>
      {children}
    </NhlAwardsContext.Provider>
  );
};
