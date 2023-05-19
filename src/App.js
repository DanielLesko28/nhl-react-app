import "./App.css";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamDetailPage from "./pages/TeamDetailPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Flex>
          <Sidebar />
          <Routes>
            <Route path={"/:id"} element={<TeamDetailPage />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
