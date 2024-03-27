const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const CompetitionType = new GraphQLObjectType({
    name: 'Competition',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        code: { type: GraphQLString },
        areaName: { type: GraphQLString }
    }
});

module.exports = CompetitionType;