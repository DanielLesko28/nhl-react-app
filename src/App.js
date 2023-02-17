import "./App.css";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
      {/* <div>
        <TeamsList />
      </div> */}
    </ChakraProvider>
  );
}

export default App;
