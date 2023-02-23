import gql from "graphql-tag";

export const typeDefs = gql`
  type Team {
    id: String!
    teamName: String!
    firstYearOfPlay: String!
    abbreviation: String!
    division: Division!
  }

  type Division {
    name: String!
    nameShort: String!
    id: String!
  }

  type AllTeams {
    teams: [Team!]
  }

  type Standings {
    records: [Team!]
  }

  type Query {
    allTeams(id: Int): [Team!]
    standings: Standings!
    categories: [String!]
  }
`;
