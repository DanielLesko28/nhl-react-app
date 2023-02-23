import { Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamsEndpoint } from "../utilities/constants/index";

const TeamPage = () => {
  const { id } = useParams();
  const [singleTeam, setSingleTeam] = useState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchData = () => {
    fetch(teamsEndpoint + "teams/" + id + "/stats", {
      method: "GET",
      withCredentials: true,
      crossorigin: true,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleTeam(data);
      });

    console.log(
      "where is single team",
      singleTeam === undefined ? "This is empty" : typeof singleTeam
    );
    console.log("here is ID from useParams", id);
  };

  return (
    <div>
      <Center>
        <Flex flexDirection="column" alignItems="center">
          <div>I want to see if everything will be on the same page or not</div>
          <h2>Here comes the ID {id}</h2>
        </Flex>
      </Center>
    </div>
  );
};

export default TeamPage;

//http://statsapi.web.nhl.com/api/v1//team20/stats
