import "./App.css";
import { Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TeamDetailPage from "./pages/TeamDetailPage";
import HomePage from "./pages/HomePage";
import { NHLProvider } from "./context/TeamsContext";
import { NhlStandingsProvider } from "./context/StandingsContext";
import PlayerDetailPage from "./pages/PlayerDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <NHLProvider>
          <NhlStandingsProvider>
            <BrowserRouter>
              <div>
                <Navbar />
              </div>
              <Flex>
                <Routes>
                  <Route path="/" element={<SignupPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path={"/:id"} element={<TeamDetailPage />} />
                  <Route path={"/people/:id"} element={<PlayerDetailPage />} />
                </Routes>
              </Flex>
            </BrowserRouter>
          </NhlStandingsProvider>
        </NHLProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
