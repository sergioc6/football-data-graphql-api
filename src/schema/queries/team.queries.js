const { GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID } = require("graphql");
const TeamType = require('./../types/team.type');
const { Op, literal } = require("sequelize");
const { Team } = require('./../../database/models/');
const { getLimitAndOffset } = require("../../utils/pagination.util");

module.exports = {
    team: {
        type: TeamType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        async resolve(parentValue, args) {
            const { id } = args;
            const team = await Team.findByPk(id);
            if(!team){
                return null;
            }
            return {
                id: team.id,
                name: team.id,
                tla: team.tla,
                shortName: team.shortName,
                areaName: team.areaName,
                address: team.address
            }
        }
    },
    teams: {
        type: new GraphQLList(TeamType),
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt }, competitionId: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20, competitionId} = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            let where = {};
            if (competitionId) {
                where = {
                    id: {
                        [Op.in] : literal(`(SELECT DISTINCT "TeamCompetitions"."teamId" FROM "TeamCompetitions" WHERE "competitionId" = ${competitionId})`)
                    }
                }
            }
            const { count, rows } = await Team.findAndCountAll({
                where, offset, limit
            }); 
            
            return rows;
        }
    }
};