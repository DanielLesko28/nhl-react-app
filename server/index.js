import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { RESTDataSource } from "@apollo/datasource-rest";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

class NhlTeamsAPI extends RESTDataSource {
  baseURL = "http://statsapi.web.nhl.com/api/v1/";

  async getTeams() {
    return await this.get("teams");
  }

  async getStandings() {
    return await this.get("standings");
  }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//adding data sources to my server's context function
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        nhlTeamsAPI: new NhlTeamsAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
