const { GraphQLList, GraphQLNonNull, GraphQLID, GraphQLInt } = require("graphql");
const CoachType = require('./../types/coach.type');
const { Coach } = require('./../../database/models/');
const { getLimitAndOffset } = require('./../../utils/pagination.util');

module.exports = {
    coach: {
        type: CoachType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        async resolve(parentValue, args) {
            const { id } = args;
            const coach = await Coach.findByPk(id);
            if (!coach) {
                return null;
            }
            return {
                id: coach.id,
                name: coach.name,
                dateOfBirth: coach.dateOfBirthString,
                nationality: coach.nationality,
                teamId: coach.teamId
            }
        }
    },
    coaches: {
        type: new GraphQLList(CoachType),
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20 } = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            const { count, rows } = await Coach.findAndCountAll({
                offset, limit
            });

            const result = rows.map(coach => {
                return {
                    id: coach.id,
                    name: coach.name,
                    dateOfBirth: coach.dateOfBirthString,
                    nationality: coach.nationality,
                    teamId: coach.teamId
                }
            })
            return result;
        }
    }
};