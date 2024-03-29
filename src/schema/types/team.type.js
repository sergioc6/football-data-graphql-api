const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const CoachType = require('./coach.type');
const PlayerType = require('./player.type');

const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        tla: { type: GraphQLString },
        shortName: { type: GraphQLString },
        areaName: { type: GraphQLString },
        address: { type: GraphQLString },
        coaches: { type: new GraphQLList(CoachType) },
        players: { type: new GraphQLList(PlayerType) }
    }
});

module.exports = TeamType;