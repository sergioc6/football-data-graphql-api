'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamCompetition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeamCompetition.init({
    teamId: DataTypes.INTEGER,
    competitionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeamCompetition',
  });
  return TeamCompetition;
};