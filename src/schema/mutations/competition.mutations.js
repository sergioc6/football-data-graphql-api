const graphql = require("graphql");
const { GraphQLID } = graphql;
const CompetitionType = require('./../types/competition.type');
const competitionsService = require('./../../services/competitions.service');
const { Competition, Team, Player, Coach } = require('./../../database/models/index');


module.exports = {
  addCompetition: {
    type: CompetitionType,
    args: {
      id: { type: GraphQLID }
    },
    async resolve(parentValue, args) {
      const { id } = args;
      const competitionResult = await competitionsService.getCompetitionByCode(id);

      const [competition, isCreated] = await Competition.findOrCreate(
        {
          where: {
            id
          },
          defaults: {
            id: competitionResult.id,
            name: competitionResult.name,
            code: competitionResult.code,
            areaName: competitionResult.area.name
          }
        });

      const { teams } = await competitionsService.getTeamsForCompetition(id);

      for (let teamResult of teams) {
        await Team.findOrCreate({
          where: { id: teamResult.id },
          defaults: {
            id: teamResult.id,
            name: teamResult.name,
            shortName: teamResult.shortName,
            tla: teamResult.tla,
            areaName: teamResult.area.name,
            address: teamResult.address
          }
        });

        await competition.addTeam(teamResult.id);

        const { coach, squad } = teamResult;
        if (coach) {
          await Coach.findOrCreate({
            where: { id: coach.id },
            defaults: {
              id: coach.id,
              name: `${coach.firstName} ${coach.lastName}`,
              dateOfBirth: coach.dateOfBirth,
              nationality: coach.nationality,
              teamId: teamResult.id
            }
          }
          );
        }

        for (let player of squad) {
          await Player.findOrCreate({
            where: { id: player.id },
            defaults: {
              id: player.id,
              name: player.name,
              position: player.position,
              dateOfBirth: player.dateOfBirth,
              nationality: player.nationality,
              teamId: teamResult.id
            }
          });
        }
      }

      return {
        id: competition.id,
        name: competition.name,
        code: competition.code,
        areaName: competition.areaName
      }
    }
  }
};