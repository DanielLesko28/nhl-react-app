import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const endpoint = "https://statsapi.web.nhl.com/api/v1/teams";

function App() {
  const [nhlTeams, setNhlTeams] = useState();

  // function getData() {
  //   axios.get(endpoint).then((response) => setNhlTeams(response.data));
  // }

  const getData = async () => {
    try {
      const response = await axios.get(endpoint);
      const data = await response?.data;
      setNhlTeams(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(nhlTeams);

  return (
    <div>
      {nhlTeams.map((team) => {
        return (
          <ul>
            <li>{team.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
