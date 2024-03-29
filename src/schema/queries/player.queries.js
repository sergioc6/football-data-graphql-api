const { GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID } = require("graphql");
const PlayerType = require('./../types/player.type');
const { Player, Team } = require('./../../database/models/');
const { getLimitAndOffset } = require("../../utils/pagination.util");

module.exports = {
    player: {
        type: PlayerType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        async resolve(parentValue, args) {
            const { id } = args;
            const player = await Player.findByPk(id);
            if (!player) {
                return null;
            }

            return {
                id: player.id,
                name: player.name,
                position: player.position,
                dateOfBirth: player.dateOfBirthString,
                nationality: player.nationality,
                teamId: player.teamId
            }
        }
    },
    players: {
        type: new GraphQLList(PlayerType),
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20 } = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            const { count, rows } = await Player.findAndCountAll({
                offset, limit, include: Team
            });

            const result = rows.map(player => {
                return {
                    id: player.id,
                    name: player.name,
                    position: player.position,
                    dateOfBirth: player.dateOfBirthString,
                    nationality: player.nationality,
                    teamId: player.teamId
                }
            });

            return result;
        }
    }
};