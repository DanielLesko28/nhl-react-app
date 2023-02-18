import { gql } from "@apollo/client";
import client from "./apollo-client";

export async function getTeams() {
  const { data } = await client.query({
    query: gql`
      query AllTeams {
        allTeams {
          teams {
            name
          }
        }
      }
    `,
  });
  console.log(data.allTeams);
  return data.allTeams.teams;
}
