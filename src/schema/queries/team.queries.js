const { GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID } = require("graphql");
const TeamType = require('./../types/team.type');
const { Op, literal } = require("sequelize");
const { Team, Player, Coach } = require('./../../database/models/');
const { getLimitAndOffset } = require("../../utils/pagination.util");

module.exports = {
    team: {
        type: TeamType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        async resolve(parentValue, args) {
            const { id } = args;
            const team = await Team.findByPk(id, { include: [Player, Coach] });
            if (!team) {
                return null;
            }

            const players = team.Players.map(player => {
                return {
                    id: player.id,
                    name: player.name,
                    position: player.position,
                    dateOfBirth: player.dateOfBirthString,
                    nationality: player.nationality,
                    teamId: player.teamId
                };
            })

            const coaches = team.Coaches.map(coach => {
                return {
                    id: coach.id,
                    name: coach.name,
                    dateOfBirth: coach.dateOfBirthString,
                    nationality: coach.nationality,
                    teamId: coach.teamId
                }
            });

            return {
                id: team.id,
                name: team.id,
                tla: team.tla,
                shortName: team.shortName,
                areaName: team.areaName,
                address: team.address,
                coaches,
                players
            }
        }
    },
    teams: {
        type: new GraphQLList(TeamType),
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt }, competitionId: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20, competitionId } = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            let where = {};
            if (competitionId) {
                where = {
                    id: {
                        [Op.in]: literal(`(SELECT DISTINCT "TeamCompetitions"."teamId" FROM "TeamCompetitions" WHERE "competitionId" = ${competitionId})`)
                    }
                }
            }
            const { count, rows } = await Team.findAndCountAll({
                where, offset, limit, include: [Player, Coach]
            });

            const results = rows.map(row => {
                const players = row.Players.map(player => {
                    return {
                        id: player.id,
                        name: player.name,
                        position: player.position,
                        dateOfBirth: player.dateOfBirth,
                        nationality: player.nationality,
                        teamId: player.teamId
                    };
                })

                const coaches = row.Coaches.map(coach => {
                    return {
                        id: coach.id,
                        name: coach.name,
                        dateOfBirth: coach.dateOfBirthString,
                        nationality: coach.nationality,
                        teamId: coach.teamId
                    }
                });

                return {
                    id: row.id,
                    name: row.id,
                    tla: row.tla,
                    shortName: row.shortName,
                    areaName: row.areaName,
                    address: row.address,
                    coaches,
                    players
                }
            });

            return results;
        }
    }
};