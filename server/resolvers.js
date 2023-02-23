export const resolvers = {
  Query: {
    allTeams: async (_, input, { dataSources }) => {
      console.log(dataSources);
      console.log(input);

      const result = await dataSources.nhlTeamsAPI.getTeams();
      console.log(result[0]);
      return result.teams.map(
        ({ id, name, abbreviation, firstYearOfPlay, division }) => ({
          id,
          teamName: name,
          abbreviation,
          firstYearOfPlay,
          division: {
            name: division.name,
            nameShort: division.nameShort,
            id: division.id,
          },
        })
      );
    },
    standings(_, __, { dataSources }) {
      return dataSources.nhlTeamsAPI.getStandings();
    },
  },
};
