import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const endpoint = "https://statsapi.web.nhl.com/api/v1/teams";

function App() {
  const [nhlTeams, setNhlTeams] = useState();

  async function getData() {
    try {
      const result = await axios.get(endpoint);
      setNhlTeams(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(nhlTeams);

  return <></>;
}

export default App;
