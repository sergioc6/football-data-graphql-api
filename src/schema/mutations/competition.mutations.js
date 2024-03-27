const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const CompetitionType = require('./../types/competition.type');

const CompetitionMutation = new GraphQLObjectType({
  name: "CompetitionMutationType",
  type: "Mutation",
  fields: {
    addCompetition: {
      type: CompetitionType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, args) {
      }
    }
  }
});

exports.mutation = CompetitionMutationType;