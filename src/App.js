import "./App.css";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamDetailPage from "./pages/TeamDetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Flex>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={"/:id"} element={<TeamDetailPage />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
