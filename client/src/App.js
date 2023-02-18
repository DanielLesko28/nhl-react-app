import "./App.css";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import TeamsStats from "./components/TeamsStats";
import StandingsPage from "./pages/StandingsPage";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
      {/* <StandingsPage /> */}
      <TeamsStats />
      {/* <HomePage /> */}
    </ChakraProvider>
  );
}

export default App;
