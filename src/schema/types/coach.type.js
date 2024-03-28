const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const TeamType = require('./team.type');

const CoachType = new GraphQLObjectType({
    name: 'Coach',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        nationality: { type: GraphQLString },
        teamId: { type: GraphQLString },
        team: { type: TeamType }
    }
});

module.exports = CoachType;