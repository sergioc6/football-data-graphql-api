const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const playerQueries = require('./queries/player.queries');
const coachQueries = require('./queries/coach.queries');
const teamQueries = require('./queries/team.queries');
const competitionQueries = require('./queries/competition.queries');

// Define the Root Query with all queries combined.
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...playerQueries,
        ...coachQueries,
        ...teamQueries,
        ...competitionQueries
    }
});

// Define the Root Mutation with all mutations.
//const RootMutation = new GraphQLObjectType();

const schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;