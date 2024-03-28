const { GraphQLObjectType, GraphQLString } = require('graphql');;
const TeamType = require('./team.type');

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        position: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        nationality: { type: GraphQLString },
        teamId: { type: GraphQLString },
        team: { type: TeamType}
    }
});

module.exports = PlayerType;