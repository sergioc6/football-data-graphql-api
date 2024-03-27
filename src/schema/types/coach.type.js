const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const CoachType = new GraphQLObjectType({
    name: 'Coach',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        nationality: { type: GraphQLString },
        teamId: { type: GraphQLString }
    }
});

module.exports = CoachType;