import "./App.css";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

// import StandingsPage from "./pages/StandingsPage";
// import { ApolloProvider } from "@apollo/client";
// import { gql, useQuery } from "@apollo/client";
// import client from "./api/apollo-client";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <ApolloProvider client={client}> */}
        <Navbar />
        <Routes>
          {/* <Route path="/" component={<TeamsStats />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <StandingsPage /> */}
          <Route path="/teams/:id/stats" element={<TeamPage />} />
        </Routes>
        {/* </ApolloProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
