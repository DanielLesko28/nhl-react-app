import gql from "graphql-tag";

export const typeDefs = gql`
  type Team {
    id: String!
    name: String!
    firstYearOfPlay: String!
    abbreviation: String!
    division: [Division!]
  }

  type Division {
    name: String!
  }

  type AllTeams {
    teams: [Team!]
  }

  type Standings {
    records: [Team!]
  }

  type Query {
    allTeams: AllTeams!
    standings: Standings!
    categories: [String!]
  }
`;
