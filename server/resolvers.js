export const resolvers = {
  Query: {
    allTeams(_, __, { dataSources }) {
      console.log(dataSources);
      return dataSources.nhlTeamsAPI.getTeams();
    },
    // standings(_, __, { dataSources }) {
    //   return dataSources.nhlTeamsAPI.getStandings();
    // },
  },
};
