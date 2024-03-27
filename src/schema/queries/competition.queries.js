const { GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLID } = require("graphql");
const CompetitionType = require('./../types/competition.type');
const { Competition } = require('./../../database/models/');
const { getLimitAndOffset } = require("../../utils/pagination.util");

module.exports = {
    competition: {
        type: CompetitionType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        async resolve(parentValue, args) {
            const { id } = args;
            const competition = await Competition.findByPk(id);
            if(!competition){
                return null;
            }
            return {
                id: competition.id,
                name: competition.name,
                code: competition.code,
                areaName: competition.areaName,
            }
        }
    },
    competitions: {
        type: new GraphQLList(CompetitionType),
        args: { page: { type: GraphQLInt }, pageSize: { type: GraphQLInt } },
        async resolve(parentValue, args) {
            const { page = 1, pageSize = 20} = args;
            const { limit, offset } = getLimitAndOffset(page, pageSize);
            const { count, rows } = await Competition.findAndCountAll({
                offset, limit
            }); 
            
            return rows;
        }
    }
};