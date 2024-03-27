const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const playerQueries = require('./queries/player.queries');
const coachQueries = require('./queries/coach.queries');
const teamQueries = require('./queries/team.queries');
const competitionQueries = require('./queries/competition.queries');

const competitionMutations = require('./mutations/competition.mutations');

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
const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        ...competitionMutations
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = schema;