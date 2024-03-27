const { GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID } = require("graphql");
const TeamType = require('./../types/team.type');
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
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20} = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            const { count, rows } = await Team.findAndCountAll({
                offset, limit
            }); 
            
            return rows;
        }
    }
};