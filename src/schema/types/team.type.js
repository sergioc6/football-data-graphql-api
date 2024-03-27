const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        tla: { type: GraphQLString },
        shortName: { type: GraphQLString },
        areaName: { type: GraphQLString },
        address: { type: GraphQLString }
    }
});

module.exports = TeamType;