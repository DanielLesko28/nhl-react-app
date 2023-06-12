import "./App.css";
import { Flex } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TeamDetailPage from "./pages/TeamDetailPage";
import HomePage from "./pages/HomePage";
import { NHLProvider } from "./context/TeamsContext";
import { NhlStandingsProvider } from "./context/StandingsContext";
import PlayerDetailPage from "./pages/PlayerDetailPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { UserAuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserAuthContextProvider>
          <NHLProvider>
            <NhlStandingsProvider>
              <BrowserRouter>
                <Layout>
                  <Flex>
                    <Routes>
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route
                        path="/"
                        element={
                          <ProtectedRoute>
                            <HomePage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path={"/:id"}
                        element={
                          <ProtectedRoute>
                            <TeamDetailPage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path={"/people/:id"}
                        element={
                          <ProtectedRoute>
                            <PlayerDetailPage />
                          </ProtectedRoute>
                        }
                      />
                    </Routes>
                  </Flex>
                </Layout>
              </BrowserRouter>
            </NhlStandingsProvider>
          </NHLProvider>
        </UserAuthContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
