const { GraphQLObjectType, GraphQLString } = require('graphql');;

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        position: { type: GraphQLString },
        dateOfBirth: { type: GraphQLString },
        nationality: { type: GraphQLString },
        teamId: { type: GraphQLString }
    }
});

module.exports = PlayerType;