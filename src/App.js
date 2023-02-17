import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import TeamsStats from "./components/TeamsStats";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
      <TeamsStats />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
